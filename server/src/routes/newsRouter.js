const { Router } = require('express');
const newsController = require('../controllers/newsController');

const newsRouter = Router();

newsRouter.route('/').get(newsController.getAllNews);

newsRouter.route('/:id').get(newsController.getNewsById);



module.exports = newsRouter;
