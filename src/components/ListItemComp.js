import React, { useState } from "react";

export default function ListItemComp(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleBtnClick() {
    props.handleClick(inputValue);
  }

  return (
    <div className="wrapper-div">
      <div className="form-input">
        <input
          type="text"
          placeholder="Please enter list item"
          onChange={handleChange}
        />
        <button onClick={handleBtnClick}>Add+</button>
      </div>
      <div className="list-div">
        <ul>
          {props.listData &&
            props.listData.length > 0 &&
            props.listData.map((data, index) => <li key={index}>{data}</li>)}
        </ul>
      </div>
    </div>
  );
}
