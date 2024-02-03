import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateSell.module.css';

const CreateSell = () => {
  const [formData, setFormData] = useState({
    bookname: '',
    author: '',
    condition: '',
    price: '',
    genre: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/store/createsell', formData);
      console.log(res.data);
      alert("success");
    } catch (error) {
      console.error(error.response.data.error);
      alert("error")
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create Sell Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Book Name:</label>
          <input
            type="text"
            name="bookname"
            value={formData.bookname}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Condition:</label>
          <input
            type="number"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateSell;
