import React, { useEffect, useState } from 'react';
import { fetchIOIs } from './IoiService';

const IoiList = () => {
  const [iois, setIois] = useState([]);

  const loadIOIs = async () => {
    try {
      const res = await fetchIOIs();
      setIois(res.data);
    } catch (err) {
      console.error('Error fetching IOIs:', err);
    }
  };

  useEffect(() => {
    loadIOIs();
    const interval = setInterval(loadIOIs, 5000); // refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Active IOIs</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Symbol</th>
            <th>Side</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Expires At</th>
          </tr>
        </thead>
        <tbody>
          {iois.map(ioi => (
            <tr key={ioi.id}>
              <td>{ioi.id}</td>
              <td>{ioi.symbol}</td>
              <td>{ioi.side}</td>
              <td>{ioi.quantity}</td>
              <td>{ioi.price}</td>
              <td>{new Date(ioi.createdAt).toLocaleString()}</td>
              <td>{new Date(ioi.expiryAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IoiList;
