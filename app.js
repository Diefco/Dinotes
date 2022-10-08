const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const session = require('express-session');
const bcryptjs = require('bcryptjs');

// Initializations
const app = express();
require('./config/db');

// Settings
dotenv.config({ path: './config/.env' });

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/src', express.static(path.join(__dirname, '/public')));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		secret: process.env.EXP_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

app.use(morgan('dev'));

// Global variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

// Server is listenning
app.listen(app.get('port'), (req, res) => {
	console.log(`Server runing in port http://localhost:${app.get('port')}`);
});
