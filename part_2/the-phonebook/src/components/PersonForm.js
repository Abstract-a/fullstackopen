import React from 'react';

const PersonForm = ({
  submit,
  nameValue,
  nameChange,
  numberValue,
  numberChange,
}) => {
  return (
    <form onSubmit={submit}>
      <div>
        name: <input value={nameValue} onChange={nameChange} />
      </div>
      <div>
        number:
        <input value={numberValue} onChange={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
