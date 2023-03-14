import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;
  const { order } = props;

  const sortedList = useMemo(() => {
    if (order === "ascending") {
      return items.sort((a, b) => a - b);
    }
    else {
      return items.sort((a, b) => b - a);
    }
  }, [items, order]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
