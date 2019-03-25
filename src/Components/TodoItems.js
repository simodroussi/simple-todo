import React from 'react';
import FlipMove from 'react-flip-move';

const TodoItems = ({ items, deleteItem }) => {
  let listItems = items.map(item => {
    return (
      <li onClick={() => deleteItem(item.id)} key={item.id}>
        {item.item}
      </li>
    );
  });
  return (
    <ul className="theList">
      <FlipMove easing="ease-out" duration={250}>
        {listItems}
      </FlipMove>
    </ul>
  );
};

export default TodoItems;
