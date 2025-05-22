'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
('use strict');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Users
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Иван Иванов',
          email: 'ivan@example.com',
          password: await bcrypt.hash('123', 10),
          imageURL: 'https://example.com/avatar1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Мария Петрова',
          email: 'maria@example.com',
          password: await bcrypt.hash('123', 10),
          imageURL: 'https://example.com/avatar2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // Categories
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          id: 1,
          name: 'Технологии',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Политика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // News
    await queryInterface.bulkInsert(
      'News',
      [
        {
          id: 1,
          title: 'Новость о технологиях',
          source: 'TechNews',
          originalURL: 'https://technews.com/article1',
          original_date: '22.10.2000',
          text: 'Текст новости о технологиях...',
          imageURL: 'https://example.com/news1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Политическая новость',
          source: 'PoliticsDaily',
          originalURL: 'https://politicsdaily.com/article2',
          original_date: '20.01.1999',
          text: 'Текст политической новости...',
          imageURL: 'https://example.com/news2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // NewsCategories
    await queryInterface.bulkInsert(
      'NewsCategories',
      [
        {
          id: 1,
          newsId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          newsId: 2,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // Favorites
    await queryInterface.bulkInsert(
      'Favorites',
      [
        {
          id: 1,
          userId: 1,
          newsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // Histories
    await queryInterface.bulkInsert(
      'Histories',
      [
        {
          id: 1,
          userId: 2,
          newsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // UserBlackLists
    await queryInterface.bulkInsert(
      'UserBlackLists',
      [
        {
          id: 1,
          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    // UserWhiteLists
    await queryInterface.bulkInsert(
      'UserWhiteLists',
      [
        {
          id: 1,
          userId: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserWhiteLists', null, {});
    await queryInterface.bulkDelete('UserBlackLists', null, {});
    await queryInterface.bulkDelete('Histories', null, {});
    await queryInterface.bulkDelete('Favorites', null, {});
    await queryInterface.bulkDelete('NewsCategories', null, {});
    await queryInterface.bulkDelete('News', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
