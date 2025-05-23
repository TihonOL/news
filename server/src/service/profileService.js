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
    return history;
  }

  static async addFavorite(userId, newsId) {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { userId, newsId },
      defaults: { userId, newsId },
    });

    if (!created) {
      throw new Error('This news is already in favorites');
    }
    return favorite;
  }

  static async addToHistory(userId, newsId) {
    const [history, created] = await History.findOrCreate({
      where: { userId, newsId },
      defaults: { userId, newsId },
    });

    if (!created) {
      throw new Error('This news is already in history');
    }
    return history;
  }
}

module.exports = ProfileService;
