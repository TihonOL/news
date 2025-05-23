'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {
      // Categories
      News.belongsToMany(models.Category, {
        through: models.NewsCategory,
        foreignKey: 'newsId',
        otherKey: 'categoryId',
        as: 'categories',
      });

      // Favorites
      News.belongsToMany(models.User, {
        through: 'Favorites',
        foreignKey: 'newsId',
        as: 'favoritedByUsers',
      });

      // History
      News.belongsToMany(models.User, {
        through: 'Histories',
        foreignKey: 'newsId',
        as: 'viewedByUsers',
      });
    }
  }

  News.init(
    {
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      source: DataTypes.STRING,
      originalURL: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      text: DataTypes.TEXT,
      original_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'News',
    },
  );

  return News;
};
