import express from "express";
import connections from "./models/index.js";
import bookRouter from "./routes/bookRoutes.js";
import "dotenv/config";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";
const swaggerJsDocs = YAML.load("./swagger.yaml");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));
app.use(express.static("public/uploads"));

app.use("/books", bookRouter);

app.listen(process.env.SWAGGER_PORT || 4000, async () => {
  try {
    await connections.authenticate();
    connections.sync();
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log("Couldn't connect to the Database", error);
  }
});
