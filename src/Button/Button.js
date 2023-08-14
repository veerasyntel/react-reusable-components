import React from 'react';
import './Button.css'

const Button = (props) => {
  const handleButtonClick = () => {}
  return (
    <div className="buttonDiv">
      <button onClick={() => handleButtonClick}>Submit</button>
    </div>
  );
}

export default Button;
