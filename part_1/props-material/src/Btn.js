import React from 'react';

function Btn({ handleClick, title }) {
  return (
    <>
      <button onClick={handleClick}>{title}</button>
    </>
  );
}

export default Btn;
