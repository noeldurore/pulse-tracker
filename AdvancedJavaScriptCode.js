/* 
File Name: AdvancedJavaScriptCode.js
Content: This code demonstrates a complex and sophisticated example of a web application that manages a library system with multiple features like adding books, searching by author/title, borrowing/returning books, etc. 
*/

// Library class defines the structure and operations of the library
class Library {
  constructor() {
    this.books = [];
    this.borrowedBooks = [];
  }

  // Add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Remove a book from the library
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Search books by author or title
  searchBooks(query) {
    const results = [];
    for (const book of this.books) {
      if (book.author.toLowerCase().includes(query.toLowerCase()) || book.title.toLowerCase().includes(query.toLowerCase())) {
        results.push(book);
      }
    }
    return results;
  }

  // Borrow a book from the library
  borrowBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      this.borrowedBooks.push(book);
    }
  }

  // Return a borrowed book to the library
  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      this.books.push(book);
    }
  }
}

// Book class defines the properties of a book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

// Create a library instance
const library = new Library();

// Add some example books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 1960));
library.addBook(new Book("Pride and Prejudice", "Jane Austen", 1813));
library.addBook(new Book("1984", "George Orwell", 1949));

// Search books by author or title
const searchResults = library.searchBooks("scott");
console.log("Search Results: " + JSON.stringify(searchResults));

// Borrow a book
const bookToBorrow = searchResults[0];
library.borrowBook(bookToBorrow);
console.log("Borrowed Book: " + JSON.stringify(bookToBorrow));

// Return a book
const bookToReturn = library.borrowedBooks[0];
library.returnBook(bookToReturn);
console.log("Returned Book: " + JSON.stringify(bookToReturn));

// Print all books in the library
console.log("All Books: " + JSON.stringify(library.books));

// Print all borrowed books
console.log("Borrowed Books: " + JSON.stringify(library.borrowedBooks));

// ... additional lines of code for other library management operations ...

// ... continue adding more features and functionalities ...

// End of code