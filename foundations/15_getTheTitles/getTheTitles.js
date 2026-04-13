const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (books) {
  //1st. Extract titles of objects
  const bookTitle = books.map((books) => books.title);
  return console.log(bookTitle);
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
