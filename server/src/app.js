const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');

const newsRouter = require('./routes/newsRouter');
const profileRouter = require('./routes/profileRouter');
<<<<<<< Updated upstream
const categoriesRouter = require('./routes/categories.router');
=======
const categoriesRouter = require('./routes/categories.router')
>>>>>>> Stashed changes


const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
<<<<<<< Updated upstream
app.use('api/categries', categoriesRouter);
// app.use('/api/news', newsRouter);
// app.use('/api/profile', profileRouter);
=======
app.use('/api/categories', categoriesRouter)
app.use('/api/news', newsRouter);
app.use('/api/profile', profileRouter);
>>>>>>> Stashed changes

// app.use('/api/news', newsRouter);
app.use('/api/profile', profileRouter);


module.exports = app;
