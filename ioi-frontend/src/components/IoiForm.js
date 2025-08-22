import React, { useState } from 'react';
import { createIOI } from './IoiService';

const IoiForm = ({ onSuccess }) => {
  const [symbol, setSymbol] = useState('');
  const [side, setSide] = useState('BUY');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createIOI({ symbol, side, quantity: Number(quantity), price: Number(price) });
      setSymbol(''); setQuantity(''); setPrice('');
      onSuccess(); // refresh list
    } catch (err) {
      console.error('Error creating IOI:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New IOI</h2>
      <input placeholder="Symbol" value={symbol} onChange={e => setSymbol(e.target.value)} required />
      <select value={side} onChange={e => setSide(e.target.value)}>
        <option value="BUY">BUY</option>
        <option value="SELL">SELL</option>
      </select>
      <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <button type="submit">Create IOI</button>
    </form>
  );
};

export default IoiForm;
