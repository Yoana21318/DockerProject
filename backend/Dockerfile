FROM node:18-alpine
WORKDIR /app
COPY insert.js queries.js ./
RUN npm install mongodb
CMD ["node", "insert.js"]
