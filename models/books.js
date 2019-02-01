
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.REAL,
  }, {});
  books.generate = (Author, id, Name, rating) => books.create({
    Author, id, Name, rating,
  });
  return books;
};
