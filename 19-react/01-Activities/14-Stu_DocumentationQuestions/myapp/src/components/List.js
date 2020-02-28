import React from "react";

const List = (props) => {
  return (
    <ul className="list-group">
      {props.groceries.filter(grocery => !grocery.purchased).map(grocery =>
        <li className="list-group-item" key={grocery.id}>{grocery.name}</li>)}
    </ul>
  );
}

export default List;

