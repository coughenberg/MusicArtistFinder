
var express = require('express');

var config = require('./config');

var indexRouter = require('./routes/index');
var artistVenuesRouter = require('./routes/artistvenues');


const app = express();

app.use(express.json());


app.use('/', indexRouter);
app.use('/artist/venues', artistVenuesRouter);

app.listen(config.App.Port, () => console.log(`Express server currently running on port ${config.App.Port}`));

module.exports = app;
