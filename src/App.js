import React, { useState, useEffect } from "react";

export const App = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [inputValue, seInputValue] = useState(false);

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => setData({}), 100);
  }, []);

  return (
    <div>
      {toggle && <div data-testid="toggle-div">toggle</div>}
      <h1>hello world!</h1>
      <h2 data-testid="input-value">{inputValue}</h2>
      {data && <div style={{ backgroundColor: "coral" }}>data</div>}
      <button data-testid="toggle-button" onClick={onClick}>
        Click me
      </button>
      <input
        onChange={(e) => seInputValue(e.target.value)}
        type="text"
        placeholder="Enter your text"
      ></input>
    </div>
  );
};
