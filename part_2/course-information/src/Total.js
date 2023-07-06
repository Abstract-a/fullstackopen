import React from 'react';

const Total = ({ parts }) => {
  const total = parts.reduce((acc, cur) => {
    return acc + cur.exercises;
  }, 0);

  return <b>total of {total} exercises</b>;
};

export default Total;
