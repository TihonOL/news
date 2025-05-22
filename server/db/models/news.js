'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    static associate(models) {
      // Categories
      News.belongsToMany(models.Category, {
        through: 'NewsCategories',
        foreignKey: 'newsId',
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
      title: DataTypes.STRING,
      source: DataTypes.STRING,
      originalURL: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      text: DataTypes.STRING,
      original_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'News',
    },
  );

  return News;
};
