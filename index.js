const fs = require("fs");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// documentation
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// App init
const app = express();

// app settings
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes //

// Bonjour
app.get("/", (req, res) => {
  res.send({ message: "Bonjour" });
});

app.use("/name", require("./controller/name.js"));

// Swagger
// Swagger Options
const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    definitions: require("./swagger.json"),
    info: {
      title: "FRITZ!Box GUI Application Test API",
      description: "A test API for applicants at GUI Team",
      //servers: ["http://localhost:1234"],
    },
  },
  //host: `localhost:${process.env.PORT}`,
  apis: ["./controller/**/*.js"],
};

// init
const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Server
const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT, () => {
  console.log(`HTTP API Server running on port ${process.env.PORT}`);
});

// Export
module.exports = app;
