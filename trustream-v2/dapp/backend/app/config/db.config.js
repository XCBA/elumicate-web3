module.exports = {
  HOST: "bix.cyoas0rbuedt.us-east-2.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "OSS6qdqKIh0XMr4kzN1G",
  DB: "datalayerdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  project : 'app'
};