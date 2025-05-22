const { Favorite, User, News, History } = require('../../db/models');

class ProfileService {
  static async getFavorites(userId) {
    const favorites = await Favorite.findAll({
      where: { userId },
      include: { model: News, as: 'news' },
    });

    return favorites;
  }

  static async getHistory(userId) {
    const history = await History.findAll({
      where: { userId },
      include: { model: News, as: 'news' },
    });

// console.log(history);

    return history;
  }
}

module.exports = ProfileService;
