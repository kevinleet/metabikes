const express = require("express");
const Router = require("./routes/AppRouter");
const logger = require("morgan");
const db = require("./db");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api", Router);

app.use("/", express.static("client"));
app.use("*", express.static("client"));

app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}.`)
);
