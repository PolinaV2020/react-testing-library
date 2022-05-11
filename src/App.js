import React, {useState, useEffect} from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [toggle, seToggle] = useState(false);
  const [inputValue, seInputValue] = useState(false);

  const onClick = () => seToggle(prev => !prev)

  useEffect(() => {
    setTimeout(() => setData({}), 100)
  }, [])

  return (
    <div>
      {toggle === true && <div data-testid="toggle-div">toggle</div>}
      <h1>hello world!</h1>
      <h2 data-testid="toggle-button">{inputValue}</h2>
      {data && <div style={{backgroundColor: "coral"}}>data</div>}
      <button data-testid="input-value" onClick={onClick}>Click me</button>
      <input onChange={(e) => seInputValue(e.target.value)} type="text" placeholder="Enter your text"></input>
    </div>
  );
}

export default App;
