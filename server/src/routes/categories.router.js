const express = require('express');
const { Category } = require('../../db/models');

const categoriesRouter = express.Router();

categoriesRouter.route('/').get(async (req, res) => {
  try {
    const allCategories = await Category.findAll();    
    res.json(allCategories);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = categoriesRouter;
