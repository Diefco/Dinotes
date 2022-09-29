const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// middlewares
app.use(morgan('dev'));

// files
const routes = require('./routes/routes');

// Set EJS
app.set('view engine', 'ejs');

// Static files
app.use('/src', express.static(path.join(__dirname, '/public')));

// Routes
app.use('/', routes);

// Port and App start
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), (req, res) => {
	console.log(`Server runing in port http://localhost:${app.get('port')}`);
});
