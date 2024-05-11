import React from "react";

function DisplayArea(props) {
  function handleClick(event) {
    const value = event.target.value;
    props.deleteData(value);
  }
  return (
    <ul>
      {props.toDoArray.map((item, index) => (
        <li key={index} value={index} onClick={handleClick}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export { DisplayArea };
