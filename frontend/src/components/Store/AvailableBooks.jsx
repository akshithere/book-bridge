import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AvailableBooks.module.css';

const AvailableBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.post('/store/fetchsell');
      setBooks(res.data.books);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Available Books</h2>
      <div className={styles.books}>
        {books.map((book) => (
          <div key={book._id} className={styles.book}>
            <h3>{book.bookname}</h3>
            <p>Author: {book.author}</p>
            <p>Condition: {book.condition}</p>
            <p>Price: ${book.price}</p>
            {book.genre && <p>Genre: {book.genre}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableBooks;
