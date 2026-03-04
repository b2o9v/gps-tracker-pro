'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware for serving static files
app.use(express.static('public'));

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the GPS Tracker API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
