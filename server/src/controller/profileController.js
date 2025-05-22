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
}

module.exports = ProfileController;
