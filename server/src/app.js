const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');

const newsRouter = require('./routes/newsRouter');
const profileRouter = require('./routes/profileRouter');
const categoriesRouter = require('./routes/categories.router');
const whitelistRouter = require('./routes/whitelistRouter');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/news', newsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/whitelist', whitelistRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
