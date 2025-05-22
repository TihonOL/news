const { News } = require('../../db/models');
const { Category } = require('../../db/models');
const axios = require('axios');

class NewsService {
  static lastUpdate = 1747927274630;

  static findAllNews = async () => {
    const currentTime = Date.now();
    console.log(currentTime);
    const timeDifference = currentTime - 1747927274630;
    const fifteenMinutesInMs = 15 * 60 * 1000;

    if (timeDifference > fifteenMinutesInMs) {
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
        await News.findOrCreate({
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
        await Category.findOrCreate({
          where: {
            name: element.category,
          },
        });
      }
      // await actualNews.map((element) => asyn
      // );
      // await Promise.all(
      //   actualNews.map((element) =>
      //     News.findOrCreate({
      //       source: element.source,
      //       author: element.author,
      //       originalURL: element.originalURL,
      //       title: element.title,
      //       text: element.text,
      //       imageURL: element.imageURL,
      //       original_date: element.original_date,
      //       category: element.category,
      //     }),
      //   ),
      // ).catch((error) => {
      //   console.error('Error in Promise.all:', error);
      // });
    }

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
