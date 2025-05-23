const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controller/profileController');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

profileRouter.route('/favorites/:userId').get(profileController.getFavorites);
profileRouter.route('/history/:userId').get(verifyAccessToken, profileController.getHistory)
profileRouter.route('/add-history/:newsId').post(verifyAccessToken, profileController.addToHistory)
profileRouter.route('/add-favorite/:newsId').post(verifyAccessToken, profileController.addFavorite);
profileRouter.route('/favorite/deleteById/:id').delete(verifyAccessToken, profileController.deleteFavoriteById);
profileRouter.route('/history/deleteById/:id').delete(verifyAccessToken, profileController.deleteHistoryById);
profileRouter.route('/favorite/clear').delete(verifyAccessToken, profileController.deleteFavorite);
profileRouter.route('/history/delete').delete(verifyAccessToken, profileController.deleteHistory);


module.exports = profileRouter;
