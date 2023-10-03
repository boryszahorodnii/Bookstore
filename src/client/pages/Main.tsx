import React from 'react';
import List from '../components/List/List';
import AddBook from '../components/AddBook/AddBook';

const Main: React.FC = () => {
  return (
    <>
      <AddBook />
      <List />
    </>
  );
};

export default Main;
