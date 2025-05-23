const NewsService = require('../service/newsService');

class NewsController {
  static getAllNews = async (req, res) => {
    try {
      const news = await NewsService.findAllNews();
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
