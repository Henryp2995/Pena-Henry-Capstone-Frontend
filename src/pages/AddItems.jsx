import React, { useState } from 'react';

const AddItems = () => {
  const [title, setTitle] = useState('');
  const [scale, setScale] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/gundams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, scale, price }),
      });
      if (!response.ok) {
        throw new Error('Failed to add item');
      }
      // Handle success, e.g., show a success message or redirect to the items page
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h2></h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Scale:
          <input
            type="text"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItems;
