import React, { useState } from "react";
import { Header } from "./Header";
import { InputArea } from "./InputArea";
import { DisplayArea } from "./DisplayArea";

function App() {
  const [toDoArray, setToDoArray] = useState([]);

  function getData(item) {
    setToDoArray((prevState) => {
      return [...prevState, item];
    });
  }

  function deleteData(index) {
    let newToDoArray = toDoArray.filter(
      (item, currentIndex) => currentIndex !== index
    );
    setToDoArray(newToDoArray);
  }

  return (
    <div className="container">
      <Header />
      <InputArea passData={getData} />
      <DisplayArea toDoArray={toDoArray} deleteData={deleteData} />
    </div>
  );
}

export { App };
