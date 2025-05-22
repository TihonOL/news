'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // News
      Category.belongsToMany(models.News, {
        through: 'NewsCategories',
        foreignKey: 'categoryId',
        as: 'news'
      });
      
      // User WhiteLists
      Category.belongsToMany(models.User, {
        through: 'UserWhiteLists',
        foreignKey: 'categoryId',
        as: 'whiteListedByUsers'
      });
      
      // User BlackLists
      Category.belongsToMany(models.User, {
        through: 'UserBlackLists',
        foreignKey: 'categoryId',
        as: 'blackListedByUsers'
      });
    }
  }
  
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  
  return Category;
};