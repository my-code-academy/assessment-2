/**
 * @jest-environment node
 */

const testObject = require('../fetchData');

describe('getAllBooksDetails()', () => {
  it('should return the id of first json object = 10', async () => {
    const response = await testObject.getAllBooksDetails();
    expect(response.data.books[0].id).toEqual(10);
  });

});

describe('getBookRatingById()', () => {
  it('should return 4.45 as the rating of the book with id 10', async () => {
    const response = await testObject.getBookRatingById(10);
    expect(response.data.rating).toEqual(4.45);
  });
});

describe('countWords()', () => {
  it('should return an array with objects grouped by author', async () => {
    const test = [{"Author":"J K Rowling","id":10,"Name":"Harry Potter and the Sorcerers Stone (Harry Potter, #1)"},
    {"Author":"Sidney Sheldon","id":120,"Name":"Rage of Angels"}];
    const testResult = {"J K Rowling": [{"Author": "J K Rowling", "Name": "Harry Potter and the Sorcerers Stone (Harry Potter, #1)", 
    "id": 10}], "Sidney Sheldon": [{"Author": "Sidney Sheldon", "Name": "Rage of Angels", "id": 120}]};
    const groupedBookObjects = testObject.groupBooksByAuthor(test);
    expect(groupedBookObjects).toEqual(testResult);
  });

});


