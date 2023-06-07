"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Turmas", "deletedAt", {
        allowNull: true,
        type: Sequelize.DATE
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Turmas", "deletedAt");
  }
};