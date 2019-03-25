const mongoose = require("mongoose");
const users = require("./routes/api/users");
const accomodations = require("./routes/api/accomodations");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello Tim"));

const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use("/api/users", users);
app.use("/api/accomodations", accomodations);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));
