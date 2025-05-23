// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.bulkInsert('News', [
//       {
//         title: 'История России',
//         source: 'Вести',
//         originalURL: 'https://www.vesti.ru/article/1234567',
//         original_date: '2023-05-15',
//         text: 'В Москве открылась новая выставка, посвященная 350-летию Петра I. Экспозиция включает уникальные архивные документы и личные вещи императора.',
//         imageURL: 'https://www.vesti.ru/img/id/123/123456.jpg',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         title: 'Новые технологии в образовании',
//         source: 'ТАСС',
//         originalURL: 'https://tass.ru/obschestvo/9876543',
//         original_date: '2023-06-20',
//         text: 'Российские школы начали внедрять систему виртуальной реальности для изучения сложных научных дисциплин. Пилотный проект запущен в 10 регионах страны.',
//         imageURL: 'https://tass.ru/img/987/987654.jpg',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         title: 'Космические достижения',
//         source: 'Роскосмос',
//         originalURL: 'https://www.roscosmos.ru/456789/',
//         original_date: '2023-07-10',
//         text: 'Российские ученые разработали новую систему терморегуляции для космических станций, которая позволит увеличить срок их службы на 30%.',
//         imageURL: 'https://www.roscosmos.ru/img/news/456789.jpg',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         title: 'Экологическая инициатива',
//         source: 'Коммерсантъ',
//         originalURL: 'https://www.kommersant.ru/doc/5678901',
//         original_date: '2023-08-05',
//         text: 'В России стартовала программа по очистке водоемов с использованием специальных бактерий. Первые результаты показали снижение загрязнения на 40%.',
//         imageURL: 'https://www.kommersant.ru/img/567/567890.jpg',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         title: 'Медицинский прорыв',
//         source: 'РБК',
//         originalURL: 'https://www.rbc.ru/health/01/09/2023/abcdef123',
//         original_date: '2023-09-01',
//         text: 'Российские фармацевты создали новое лекарство от редких форм аллергии, которое уже прошло успешные клинические испытания.',
//         imageURL: 'https://s0.rbk.ru/img/123/123abc.jpg',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('News', null, {});
//   },
// };
