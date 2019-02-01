const saveBooksHandler = require('../handlers/saveAllBooksInDBHandler');
const model = require('../models');

describe('saveAllBooksDeatilsHandler()', () => {
  beforeEach(() => {
    model.books.truncate();
  });
  it('should save all entries in the db', async () => {
    await saveBooksHandler();
    expect(await model.books.count()).toEqual(10);
  });
});
