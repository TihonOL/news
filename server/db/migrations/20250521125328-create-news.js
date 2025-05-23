'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
      title: {
        type: Sequelize.STRING,
      },
      source: {
        type: Sequelize.STRING,
      },
      originalURL: {
        type: Sequelize.STRING,
      },
      original_date: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.TEXT,
      },
      imageURL: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('News');
  },
};
