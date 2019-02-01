const model = require('../models');
const fetchBooksUtils = require('../fetchData');

module.exports = async (request, h) => {
  const allBooksResponse = fetchBooksUtils.getAllBooksDetails().then(async (allBooksData) => {
    allBooksData = fetchBooksUtils.addRating(allBooksData.data.books).then((booksData) => {
      booksData.forEach((book) => {
        model.books.generate(book.Author, book.id, book.Name, book.rating);
      });
    });
  });
  return `rows added to database`;
};
