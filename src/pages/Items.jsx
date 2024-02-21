import React, { useState, useEffect } from 'react';

const Items = () => {
  const [gundams, setGundams] = useState([]);

  useEffect(() => {
    fetchGundams();
  }, []);

  const fetchGundams = async () => {
    try {
      const response = await fetch(`http://localhost:3000/gundams`);
      if (!response.ok) {
        throw new Error('Failed to fetch Gundams');
      }
      const data = await response.json();
      setGundams(data.data);
    } catch (error) {
      console.error('Error fetching Gundams:', error);
    }
  };

  return (
    <div>
      <h2>Gundams</h2>
      <ul>
        {gundams.map((gundam, index) => (
          <li key={gundam._id}>
            <div>
              <img src={`./src/assets/Cap-stone-images/gundamPic${index + 1}.jpg`} alt={`Gundam ${index + 1}`} />
            </div>
            <div>
              <p>{gundam.title}</p>
              <p>Scale: {gundam.scale}</p>
              <p>Price: {gundam.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
