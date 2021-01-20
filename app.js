
var express = require('express');

var config = require('./config');

var indexRouter = require('./src/index');
var usersRouter = require('./src/users');


const app = express();

app.use(express.json());


app.use('/', indexRouter);
app.use('/artist/venues', artistVenuesRouter);

app.listen(config.App.Port, () => console.log(`Express server currently running on port ${config.App.Port}`));

module.exports = app;
 