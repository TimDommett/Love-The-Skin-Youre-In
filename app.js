const mongoose = require("mongoose");
const users = require("./routes/api/users");
const accomodations = require("./routes/api/accomodations");
const bodyParser = require("body-parser");
const User = require("./models/User");
const passport = require("passport");
const reviews = require("./routes/api/reviews");

const express = require("express");
const app = express();
const path = require("path");

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}


const db = require("./frontend/src/config/keys").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));


app.use(passport.initialize());
require("./frontend/src/config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/accomodations", accomodations);
app.use("/api/reviews", reviews);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
