import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { authRoute } from "./routes/auth.route";
import { bountyRouter } from "./routes/bounty.route";

const app = express();
app.use(express.json());
app.use("/api", authRoute);
app.use("/api", bountyRouter);
app.listen(3000, () => {
  console.log("App listening in the port 3000");
});
