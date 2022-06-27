import "./styles.css";
import React, { useState } from "react";
import ListItemComp from "./components/ListItemComp";

export default function App() {
  const [listData, setListData] = useState([]);

  async function handleClick(inputValue) {
    setListData((prevListData) => [...prevListData, inputValue]);

    /*This statement(below) will not show state updates properly on UI as state update is an Asynchronous operation.
    To make it work properly we can pass a callback function while setting state */

    // setListData([...listData, inputValue]);
  }

  return (
    <div className="App">
      <ListItemComp listData={listData} handleClick={handleClick} />
    </div>
  );
}
