import { Sequelize } from "sequelize";
import "dotenv/config";
export default new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    //We can add pool like this using orm=Object Relational Mapping
    pool: { max: 5 },
  }
);
