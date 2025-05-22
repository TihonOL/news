// models/history.js

'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo(models.News, {
        foreignKey: 'newsId',
        as: 'news',
      });

      History.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }

  History.init(
    {
      userId: DataTypes.INTEGER,
      newsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'History',
    },
  );

  return History;
};
