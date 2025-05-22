const { Favorite, User, News } = require('../../db/models');

class ProfileService {
  static async getFavorites(userId) {
    const favorites = await Favorite.findAll({
      where: { userId },
      include: { model: News, as: 'news' },
    });

    return favorites;
  }
}

module.exports = ProfileService;
