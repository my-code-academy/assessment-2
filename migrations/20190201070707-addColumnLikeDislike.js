
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'books',
      'like',
      Sequelize.BOOLEAN,
    );
  },

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'books',
      'like',
    );
  },
};
