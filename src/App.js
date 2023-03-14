import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [changeOrder, setChangeOrder] = useState("Ascending");

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeOrderHandler = useCallback(() => {
    setChangeOrder((prevOrder) => {
      if (prevOrder === "ascending") {
        return "descending";
      }
      else {
        return "ascending";
      }
    })
  }, [])

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} order={changeOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>{changeOrder === "ascending" ? "Change Descending Order" : "Change Ascending Order"}</Button>
    </div>
  );
}

export default App;
