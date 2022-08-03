import React from 'react';
import './CompOne.css';

const CompOne: React.FC = () => {
  return (
    <div className="Comp">
      <h3>
        <span role="img" aria-label="React Logo">
          ⚛️
        </span>
        Comp One hello
      </h3>
    </div>
  );
};

export default CompOne;
