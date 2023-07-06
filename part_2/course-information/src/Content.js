import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
  const arr = parts.map((item) => {
    return <Part key={item.id} part={item} />;
  });

  return <>{arr}</>;
};

export default Content;
