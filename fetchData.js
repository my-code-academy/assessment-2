const axios = require('axios');

const getAllBooksDetails = () => {
  try {
    return axios.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks');
  } catch (error) {
    console.error(error);
  }
};

const getBookRatingById = async (id) => {
  return new Promise((resolve,reject) => {
    const res = axios.get(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${id}`);
    resolve(res);
  });
};

const groupBooksByAuthor = (booksDetailsList) => {
  return booksDetailsList.reduce((booksSortedByAuthor, currBook) => {
    if (currBook.Author in booksSortedByAuthor) {
      booksSortedByAuthor[currBook.Author].push(currBook);
    } else {
      booksSortedByAuthor[currBook.Author] = [currBook];
    }
    return booksSortedByAuthor;
  }, {});
};

const addRating = async (allBooksData) => {
  return new Promise(async (resolve, reject) => {
    for(let i = 0; i < allBooksData.length; i++) {
      const rating = await getBookRatingById(allBooksData[i].id);
      allBooksData[i].rating = rating.data.rating;
    }
    resolve(allBooksData);
  });
};

const groupByAuthor = () => {
  const allBooksResponse = getAllBooksDetails().then(async (allBooksData) => {
    allBooksData = addRating(allBooksData.data.books).then((booksData) => {
      //console.log(groupBooksByAuthor(booksData));
      console.log(booksData);
    });
  });
};

//groupByAuthor();

module.exports = {getAllBooksDetails, getBookRatingById, addRating, groupBooksByAuthor, groupByAuthor};
