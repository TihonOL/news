const categoriesRouter = require('express').Router();

const bcrypt = require('bcrypt');
const { News } = require('../../db/models');
const { Category } = require('../../db/models');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookie.config');

categoriesRouter.get(async (req, res) => {
    const news = News.findAll()
})

module.exports = categoriesRouter;
