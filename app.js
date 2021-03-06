// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
var bodyParser = require('body-parser');

// routes
const books = require('./routes/api/books');
const wishes = require('./routes/api/wishes');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);
app.use('/api/wishes', wishes);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));