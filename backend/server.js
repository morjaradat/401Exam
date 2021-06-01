'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const superagent = require('superagent');
require('dotenv').config();

const apiData = require('./crud+api/ApiData');
const curd = require('./crud+api/curd')
const app = express();
const PORT = process.env.PORT || 3099;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
    res.send('everything is working!')
});

app.get('/get-characters', apiData)

app.get('/favorite', curd.getFunction)
app.post('/favorite', curd.postFunction)
app.put('/favorite/:slug', curd.updateFunction)
app.delete('/favorite/:slug', curd.deleteFunction)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});