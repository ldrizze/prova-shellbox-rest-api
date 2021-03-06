require('dotenv').config()
module.exports = {
  "username": process.env.DB_USER || "root",
  "password": process.env.DB_PASS || "",
  "database": process.env.DB_NAME || "todotasks",
  "host": process.env.DB_HOST || "localhost",
  "port": process.env.DB_PORT || 3306,
  "dialect": "mysql",
  "operatorsAliases": false
}
