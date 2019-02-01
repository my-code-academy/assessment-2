const model = require('../models');

module.exports = {
  method: 'POST',
  path: '/books/like/{id}',
  handler: (request, h) => {
    model.books.addLike(encodeURIComponent(request.params.id));
  },
};