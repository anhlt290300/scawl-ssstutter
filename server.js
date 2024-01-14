const startBrowser = require("./brower");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const express = require("express");

const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentails: true,
  optionSuccessStatus: 200,
  port: 3000,
};

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Scrawl data SSSTUTTER",
      version: "1.0.0",
      description: "Tổng hợp api cào dữ liệu SSSTUTTER từ a -> z",
    },
  },
  apis: ["./routes/*.js"], // Path to the API routes folder
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json("Server dang chay");
});

app.get("/api/all-product", async (req, res) => {
  const browser = startBrowser();

  res.json({ message: "Hello!" });
});

app.listen(3000, () => {
  console.log("server listen at http://localhost:3000/api-docs/");
});
