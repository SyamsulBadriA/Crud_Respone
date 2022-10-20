"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */ await queryInterface.addColumn("Photo", "UserId", {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addConstraint("Photos", {
      fileds: ["UserId"],
      type: "foreign key",
      name: "Photos_fk",
      references: {
        table: "Users",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("Photos", "photo_fk");
    await queryInterface.removeColumn("Photos", "UserId");
  },
};
