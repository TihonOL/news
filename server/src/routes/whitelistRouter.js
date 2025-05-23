const express = require('express');
const { UserWhiteList, Category, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

const whitelistRouter = express.Router();

whitelistRouter
  .route('/')
  .post(verifyAccessToken, async (req, res) => {
    try {
      const { categoryId } = req.body;
      const userId = res.locals.user.id;
      const newData = await UserWhiteList.create({ categoryId, userId });
      res.json(newData);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  })
  .get(verifyAccessToken, async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const whitelists = await User.findOne({
        where: { id: userId },
        include: { model: Category, as: 'whiteListedCategories' },
      });
      res.json(whitelists);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

whitelistRouter.route('/:name').delete(verifyAccessToken, async (req, res) => {
  console.log(req.params);
  const { name } = req.params;
  const uId = res.locals.user.id;
  const categoryToDelete = await Category.findOne({
    where: {
      name,
    },
  });
  try {
    await UserWhiteList.destroy({
      where: {
        categoryId: categoryToDelete.id,
        userId: uId,
      },
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = whitelistRouter;
