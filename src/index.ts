import express from 'express';
var config = require('../config/config.json');

var artistVenuesRouter = require('./routes/artistvenues');
var artistRouter = require('./routes/artist');

const app = express();
app.use(express.json());

app.use('/artist/venues', artistVenuesRouter);
app.use('/artist', artistRouter);

app.listen(config.A, () => {
    console.log(`Server is listening on port ${config.App.Port}`);
    
});

module.exports = app;
