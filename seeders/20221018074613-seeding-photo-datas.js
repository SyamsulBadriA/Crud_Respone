"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          tittle: "Foto Naruto",
          caption: "Di ambil dikonoha",
          image_url: "https://konohagakure/naruto.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: "Foto Sasule",
          caption: "skip bocah baperan",
          image_url: "https://konohagakure/Sasule.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: "Foto sakura",
          caption: "beban team dan penyiksa anak yateam",
          image_url: "https://konohagakure/sakura.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: "Foto Portgras D.ace",
          caption: "Di ambil ketika menjadi donat",
          image_url: "https://marineford/ace-donat.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tittle: "Foto Boruto",
          caption: "Anak durhaka dan sotau",
          image_url: "https://konohagakure/anaknya-raikage.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
