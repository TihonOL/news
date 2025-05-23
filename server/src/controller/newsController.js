const NewsService = require('../service/newsService');

class NewsController {
  static getAllNews = async (req, res) => {
    try {
      // const { title } = req.query;
      const userId = res.locals.user.id;
      console.log(userId);
      const news = await NewsService.findAllNews(userId);
      // console.log(news);
      res.json(news);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  };

  static getNewsById = async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const newsId = req.params.id;
      const targetNews = await NewsService.findNewsById(newsId, userId);
      res.json(targetNews);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  };
}

module.exports = NewsController;
