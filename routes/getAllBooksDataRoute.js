const getUserHandler = require('../handlers/saveAllBooksInDBHandler');

module.exports = {
  method: 'GET',
  path: '/books/save',
  handler: getUserHandler,
};
