import "reflect-metadata";

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "root",
  database: "curso_typeorm",
  synchronize: true, //set to false when its on prod
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
