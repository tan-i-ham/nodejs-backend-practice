const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
// load env variable
dotenv.config({ path: './config/config.env' });

// connect to db
connectDB();

const app = express();

// const logger = require('./middlewares/logger');
// app.use(logger);
if ((process.env.NODE_ENV = 'development')) {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

// route files
const bootcamp = require('./routes/bootcamps');
// Mount router
app.use('/api/v1/bootcamps', bootcamp);

// basic route
// app.get('/', (req, res) => {
//     res.send('hello from express app!!');
//     res.send({ name: 'hannah' }); // res.json({ name: "hannah" })
//     res.sendStatus(404);
//     res.status(404).json({ msg: 'error' });
// });

const server = app.listen(PORT, () => {
    console.log(
        `App listening on port ${PORT} in ${process.env.NODE_ENV}!`.yellow.bold
    );
});

// Handle unhandled promise rejections
process.on('unhadledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server
    server.close(() => process.exit(1));
});