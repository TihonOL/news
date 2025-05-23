'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // WhiteLists
      User.belongsToMany(models.Category, {
        through: models.UserWhiteList,
        foreignKey: 'userId',
        otherKey: 'categoryId',
        as: 'whiteListedCategories'
      });
      
      // BlackLists
      User.belongsToMany(models.Category, {
        through: 'UserBlackLists',
        foreignKey: 'userId',
        as: 'blackListedCategories'
      });
      
      // Favorites
      User.belongsToMany(models.News, {
        through: 'Favorites',
        foreignKey: 'userId',
        as: 'favoriteNews'
      });
      
      // History
      User.belongsToMany(models.News, {
        through: 'Histories',
        foreignKey: 'userId',
        as: 'newsHistory'
      });
    }
  }
  
  User.init({
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  
  return User;
};