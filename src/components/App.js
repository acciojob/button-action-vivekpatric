import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const[state,setState]=useState(false);

  return (
    <div className="App" id="main">
      <button id="click" onClick={()=>setState(true)}>Click Me</button>
      <p className={state?'show':'hide'} id="para">
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
      </p>
    </div>
  );
}

export default App
