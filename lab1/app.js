const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const articleRoutes = require("./routes/articleRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/", articleRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
