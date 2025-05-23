const { Router } = require('express');
const newsController = require('../controller/newsController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const newsRouter = Router();

newsRouter.route('/').get(newsController.getAllNews);

newsRouter.route('/:id').get(verifyAccessToken, newsController.getNewsById);

module.exports = newsRouter;
