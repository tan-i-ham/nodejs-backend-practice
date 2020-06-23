const express = require('express');
const dotenv = require('dotenv');

// load env variable
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// route files
const bootcamp = require('./routes/bootcamps.js');

// Mount router
app.use('/api/v1/bootcamps', bootcamp);

// route
app.get('/', (req, res) => {
    // res.send("hello from express app!!")
    //res.send({ name: "hannah" }) // res.json({ name: "hannah" })
    // res.sendStatus(404);
    res.status(404).json({ msg: 'error' });
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV}!`);
});