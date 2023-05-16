import express from "express";
import bodyParser from "body-parser";
import { Prisma } from "@prisma/client";
import cors from "cors";
import postRoutes from "./routes//posts.js";

// initialize express
const app = express();

// general
// setting up body express
app.use(
  bodyParser.json({
    limit: "30mb", // megabytes
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb", //megabytes
    extended: true,
  })
);

// setting up cors
app.use(cors());
const port = process.env.PORT || 5000;

// setting up routes
app.use("/posts", postRoutes);

// run server
app.listen(port, (req, res) => {
  console.log(`Server running at port ${port}`);
});
