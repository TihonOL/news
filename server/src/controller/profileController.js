const ProfileService = require('../service/profileService');

class ProfileController {
  static async getFavorites(req, res) {
    try {
      const { userId } = req.params;
      const favorites = await ProfileService.getFavorites(userId);

      return res.status(200).json({ favorites });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async getHistory(req, res) {
    try {
      const { userId } = req.params;
      const history = await ProfileService.getHistory(userId);

      const plainHistory = history.map((item) => item.get({ plain: true }));

      return res.status(200).json(plainHistory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async addFavorite(req, res) {
    try {
      const userId = res.locals.user.id;
      const { newsId } = req.params;
      console.log('req-params', req.params);

      const favorite = await ProfileService.addFavorite(userId, newsId);
      return res.status(200).json(favorite);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async addToHistory(req, res) {
    try {
      const userId = res.locals.user.id;
      const { newsId } = req.params;
      const favorite = await ProfileService.addToHistory(userId, newsId);
      return res.status(200).json(favorite);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async deleteFavorite(req, res) {
    try {
      const userId = res.locals.user.id;
      const favorite = await ProfileService.deleteFavorite(userId);
      return res.status(200).json(favorite);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async deleteHistory(req, res) {
    try {
      const userId = res.locals.user.id;
      const history = await ProfileService.deleteHistory(userId);
      return res.status(204).json(history);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async deleteFavoriteById(req, res) {
    try {
      const { id } = req.params;
      const userId = res.locals.user.id;
      const deleteNewsId = await ProfileService.deleteFavoriteById(id);
      return res.status(204).json(deleteNewsId);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  static async deleteHistoryById(req, res) {
    try {
      const { id } = req.params;
      const userId = res.locals.user.id;
      const deleteNewsId = await ProfileService.deleteHistoryById(id);
      return res.status(204).json(deleteNewsId);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = ProfileController;
