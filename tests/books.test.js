const model = require('../models');

describe('books generate', () => {
  beforeEach(async () => {
    await model.books.truncate();
  });
  it('should make an entry in the database with the given book details', async () => {
    await model.books.generate('J K Rowling', 50, 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
      4.47);
    expect(await model.books.count()).toEqual(1);
  });
});