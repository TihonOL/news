const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controller/profileController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

profileRouter.route('/favorites/:userId').get(profileController.getFavorites);
profileRouter.route('/history/:userId').get(verifyAccessToken, profileController.getHistory)
profileRouter.route('/add-history/:newsId').post(verifyAccessToken, profileController.addToHistory)
profileRouter.route('/add-favorite/:newsId').post(verifyAccessToken, profileController.addFavorite);

module.exports = profileRouter;
