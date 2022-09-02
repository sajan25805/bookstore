import express from "express";
import connections from "./models/index.js";
import bookRouter from "./routes/bookRoutes.js";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public/uploads"));

app.use("/books", bookRouter);

app.listen(process.env.APP_PORT || 8000, async () => {
  try {
    await connections.authenticate();
    connections.sync();
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log("Couldn't connect to the Database", error);
  }
});
