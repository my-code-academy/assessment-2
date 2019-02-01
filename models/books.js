
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    id: DataTypes.INTEGER,
    Author: DataTypes.STRING,
    Name: DataTypes.STRING,
    rating: DataTypes.REAL,
  }, {});
  
  return books;
};
