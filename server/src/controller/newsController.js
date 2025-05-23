const NewsService = require('../service/newsService');

class NewsController {
  static getAllNews = async (req, res) => {
    try {
      // const { title } = req.query;
      const news = await NewsService.findAllNews();
      // console.log(news);
      res.json(news);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  };

  static getNewsById = async (req, res) => {
    console.log(req, '-----');
    
    try {
      const { id } = req.params;
      const targetNews = await NewsService.findNewsById(id);
      console.log(targetNews);
      res.json(targetNews);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal server error');
    }
  };
}

module.exports = NewsController;
