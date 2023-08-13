import React from 'react';

export default function Button(props) {
  return (
    <div className="buttonDiv">
      <button onClick={() => props.handleButtonClick()}>Submit</button>
    </div>
  );
}
