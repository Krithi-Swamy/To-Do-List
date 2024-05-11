import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function handleClick() {
    props.passData(item);
    setItem("");
  }

  return (
    <div>
      <input
        className="font"
        type="item"
        name="item"
        value={item}
        onChange={handleChange}
      />
      <button className="font" type="button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export { InputArea };
