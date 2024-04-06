import express from "express";
const app = express();
app.listen(3000, () => {
  console.log("App listening in the port 3000");
});

import { hari } from "./middleware/jwt.auth";
