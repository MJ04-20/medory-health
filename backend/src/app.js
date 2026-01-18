import express from "express";
import cors from "cors";
import errorHandler from "./common/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MedoryHealth Backend Running");
});

app.use(errorHandler);

export default app;
