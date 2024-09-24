const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/smoketrees")
mongoose.connection
    .once("open", () => {
        console.log("Connected to DB.....");
    })
    .on("error", () => {
        console.log("Problem connecting to DB..!!!!!");
    });

// Routes
app.use('/api', userRoutes);

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log("Server listening at 3000....");
});