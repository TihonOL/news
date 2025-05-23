const { Favorite, User, News, History, Category } = require('../../db/models');
class ProfileService {
  static async getFavorites(userId) {
    const favorites = await Favorite.findAll({
      where: { userId },
      include: {
        model: News,
        as: 'news',
        include: {
          model: Category,
          as: 'categories',
        },
      },
    });

    return favorites;
  }

  static async getHistory(userId) {
    const history = await History.findAll({
      where: { userId },
      include: {
        model: News,
        as: 'news',
        include: {
          model: Category,
          as: 'categories',
        },
      },
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

  static async deleteFavorite(userId) {
    const favorite = await Favorite.destroy({
      where: {
        userId,
      },
    });

    if (!favorite) {
      throw new Error('This news is not in favorites');
    }
    return { favorite };
  }

  static async deleteHistory(userId) {
    const history = await History.destroy({
      where: { userId },
    });

    if (!history) {
      throw new Error('This news is not in history');
    }

    return history;
  }

  static async deleteFavoriteById(id) {
    const favorite = await Favorite.destroy({
      where: { id },
    });
    if (!favorite) {
      throw new Error('This news is not in history');
    }
    return favorite;
  }

    static async deleteHistoryById(id) {
    const favorite = await History.destroy({
      where: { id },
    });
    if (!favorite) {
      throw new Error('This news is not in history');
    }
    return favorite;
  }
}

module.exports = ProfileService;
