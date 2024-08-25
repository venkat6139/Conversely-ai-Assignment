import React, { useState } from 'react';
import './index.css';

const Matrix = () => {
  const [boxStates, setBoxStates] = useState(Array(9).fill(''));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (boxStates[index] === '' && clickOrder.length < 9) {
      const newBoxStates = [...boxStates];
      newBoxStates[index] = 'green';
      setBoxStates(newBoxStates);
      setClickOrder([...clickOrder, index]);
    }

    if (clickOrder.length === 8) {
      const newBoxStates = Array(9).fill('');
      clickOrder.forEach((i, orderIndex) => {
        setTimeout(() => {
          newBoxStates[i] = 'orange';
          setBoxStates([...newBoxStates]);
        }, orderIndex * 300);
      });
      setTimeout(() => {
        newBoxStates[index] = 'orange';
        setBoxStates([...newBoxStates]);
      }, 8 * 300);
    }
  };

  return (
    <div className="matrix">
      {boxStates.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
