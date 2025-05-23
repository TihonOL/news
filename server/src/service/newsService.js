const { News } = require('../../db/models');
const { Category } = require('../../db/models');
const { NewsCategory } = require('../../db/models');
const { History } = require('../../db/models');
const axios = require('axios');

class NewsService {
  static lastUpdate = 1747927274630;

  static findAllNews = async () => {
    const currentTime = Date.now();
    const timeDifference = currentTime - NewsService.lastUpdate;
    const fifteenMinutesInMs = 15 * 60 * 1000;

    if (timeDifference > fifteenMinutesInMs) {
      this.lastUpdate = Date.now();
      const actualNews = await axios
        .get('https://mskex.com/newsapi')
        .then((response) => response.data)
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
      // console.log(actualNews);
      for (const element of actualNews) {
        // eslint-disable-next-line no-await-in-loop
        const [newNews, isCreatedNews] = await News.findOrCreate({
          where: {
            source: element.source,
            author: element.author,
            originalURL: element.originalURL,
            title: element.title,
            text: element.text,
            imageURL: element.imageURL,
            original_date: element.original_date,
          },
        });
        if (isCreatedNews) {
          // eslint-disable-next-line no-await-in-loop
          const [newCategory, isCreatedCategory] = await Category.findOrCreate({
            where: {
              name: element.category,
            },
          });
          // eslint-disable-next-line no-await-in-loop
          await NewsCategory.create({
            newsId: newNews.id,
            categoryId: newCategory.id,
          });
        }
      }
    }

    const allNews = await News.findAll({
      order: [['original_date', 'DESC']],
      include: {
        model: Category,
        as: 'categories',
      },
    });
    console.log(allNews);
    return allNews;
  };

  static findNewsById = async (nId, uId) => {
    const newsBiId = await News.findByPk(nId);
    await History.findOrCreate({
      where: {
        userId: uId,
        newsId: nId,
      },
    });
    // console.log(newsBiId);
    if (!newsBiId) {
      throw new Error('News not found');
    }
    return newsBiId;
  };
}

module.exports = NewsService;
