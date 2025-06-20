use("cars");

db.cars.find({});

db.cars.find({ brand: "Toyota" });

db.cars.find({ brand: "Toyota", year: { $gte: 2020 } });

db.cars.updateOne(
  { model: "Civic" },
  { $set: { price: 21000 } }
);

db.cars.deleteOne({ model: "Yaris" });

db.cars.aggregate([
  { $group: {
      _id: "$brand",
      averagePrice: { $avg: "$price" }
  }}
]);

db.cars.aggregate([
  { $group: {
      _id: "$brand",
      count: { $sum: 1 }
  }}
]);

db.cars.aggregate([
  { $match: { price: { $gt: 25000 } } },
  { $sort: { price: -1 } }
]);
