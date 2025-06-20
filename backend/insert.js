use("cars");

db.cars.insertMany([
  {
    "model": "Corolla",
    "brand": "Toyota",
    "year": 2020,
    "price": 20000,
    "features": ["air conditioning", "bluetooth"],
    "specs": { "engine": "1.8L", "fuel": "petrol", "hp": 132 }
  },
  {
    "model": "Model 3",
    "brand": "Tesla",
    "year": 2022,
    "price": 45000,
    "features": ["autopilot", "electric"],
    "specs": { "engine": "electric", "fuel": "electric", "hp": 283 }
  },
  {
    "model": "Civic",
    "brand": "Honda",
    "year": 2021,
    "price": 22000,
    "features": ["heated seats", "sunroof"],
    "specs": { "engine": "2.0L", "fuel": "petrol", "hp": 158 }
  },
  {
    "model": "Focus",
    "brand": "Ford",
    "year": 2019,
    "price": 18000,
    "features": ["navigation", "rear camera"],
    "specs": { "engine": "1.5L", "fuel": "diesel", "hp": 120 }
  },
  {
    "model": "Camry",
    "brand": "Toyota",
    "year": 2023,
    "price": 28000,
    "features": ["lane assist", "backup camera"],
    "specs": { "engine": "2.5L", "fuel": "hybrid", "hp": 203 }
  },
  {
    "model": "Mustang",
    "brand": "Ford",
    "year": 2022,
    "price": 55000,
    "features": ["sports mode", "leather interior"],
    "specs": { "engine": "5.0L", "fuel": "petrol", "hp": 450 }
  },
  {
    "model": "Accord",
    "brand": "Honda",
    "year": 2020,
    "price": 25000,
    "features": ["adaptive cruise control", "sunroof"],
    "specs": { "engine": "1.5L", "fuel": "petrol", "hp": 192 }
  },
  {
    "model": "X5",
    "brand": "BMW",
    "year": 2021,
    "price": 60000,
    "features": ["4WD", "touchscreen display"],
    "specs": { "engine": "3.0L", "fuel": "diesel", "hp": 335 }
  },
  {
    "model": "i3",
    "brand": "BMW",
    "year": 2019,
    "price": 38000,
    "features": ["electric drive", "eco mode"],
    "specs": { "engine": "electric", "fuel": "electric", "hp": 170 }
  },
  {
    "model": "Yaris",
    "brand": "Toyota",
    "year": 2018,
    "price": 16000,
    "features": ["compact", "fuel efficient"],
    "specs": { "engine": "1.3L", "fuel": "petrol", "hp": 106 }
  }
]);
