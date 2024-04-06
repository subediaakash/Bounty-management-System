import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { authRoute } from "./routes/auth.route";

const app = express();
app.use(express.json());
app.use("/api", authRoute);
app.listen(3000, () => {
  console.log("App listening in the port 3000");
});
