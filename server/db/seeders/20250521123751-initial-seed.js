// 'use strict';


/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Users
    await queryInterface.bulkInsert(
      'Users',
      [
        //       {
        //         name: 'Иван Иванов',
        //         email: 'ivan@example.com',
        //         password: await bcrypt.hash('123', 10),
        //         imageURL: 'https://example.com/avatar1.jpg',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //       },
        //       {
        //         name: 'Мария Петрова',
        //         email: 'maria@example.com',
        //         password: await bcrypt.hash('123', 10),
        //         imageURL: 'https://example.com/avatar2.jpg',
        //         createdAt: new Date(),
        //         updatedAt: new Date(),
        //       },
      ],
      {},
    );

    //   // Categories
    //   await queryInterface.bulkInsert(
    //     'Categories',
    //     [
    //       {
    //         name: 'Технологии',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //       {
    //         name: 'Политика',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );

    //   // News
    //   await queryInterface.bulkInsert(
    //     'News',
    //     [
    //       {
    //         title: 'Новость о технологиях',
    //         source: 'TechNews',
    //         originalURL: 'https://technews.com/article1',
    //         original_date: '22.10.2000',
    //         text: 'Текст новости о технологиях...',
    //         imageURL:
    //           'https://s.rbk.ru/v1_companies_s3/media/trademarks/96888771-9c1a-4d27-b721-50c6d85912d5.jpg',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //       {
    //         title: 'Политическая новость',
    //         source: 'PoliticsDaily',
    //         originalURL: 'https://politicsdaily.com/article2',
    //         original_date: '20.01.1999',
    //         text: 'Текст политической новости...',
    //         imageURL:
    //           'https://s.rbk.ru/v1_companies_s3/media/trademarks/96888771-9c1a-4d27-b721-50c6d85912d5.jpg',
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );

    //   // NewsCategories
    //   await queryInterface.bulkInsert(
    //     'NewsCategories',
    //     [
    //       {
    //         newsId: 1,
    //         categoryId: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //       {
    //         newsId: 2,
    //         categoryId: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );

    //   // Favorites
    //   await queryInterface.bulkInsert(
    //     'Favorites',
    //     [
    //       {
    //         userId: 1,
    //         newsId: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //               {
    //         userId: 2,
    //         newsId: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //                       {
    //         userId: 2,
    //         newsId: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );

    //   // Histories
    //   await queryInterface.bulkInsert(
    //     'Histories',
    //     [
    //       {
    //         userId: 2,
    //         newsId: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //               {
    //         userId: 2,
    //         newsId: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );

    //   // UserBlackLists
    //   await queryInterface.bulkInsert(
    //     'UserBlackLists',
    //     [
    //       {
    //         userId: 1,
    //         categoryId: 2,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );

    //   // UserWhiteLists
    //   await queryInterface.bulkInsert(
    //     'UserWhiteLists',
    //     [
    //       {
    //         userId: 2,
    //         categoryId: 1,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //       },
    //     ],
    //     {},
    //   );
  },