const { News } = require('../../db/models');

class NewsService {
  static findAllNews = async () => {
    const allNews = await News.findAll();
    // console.log(allNews);

    return allNews;
  };

  static findNewsById = async (id) => {
    const newsBiId = await News.findByPk(id);
    if (!newsBiId) {
      throw new Error('Student not found');
    }
  
    return newsBiId;
  };
}

module.exports = NewsService;
