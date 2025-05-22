const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controller/profileController');

profileRouter.route('/favorites/:userId').get(profileController.getFavorites);
profileRouter.route('/history/:userId').get(profileController.getHistory);

module.exports = profileRouter;
