import logo from "./logo.svg";
import "./App.css";
import React from 'react';

import "./App_Css.css"

function App() {
  // Logic
  // Logic
  // let div_style = { backgroundColor: 'red', width: '200px', height: '300px' }
  // let h1_style = { color: 'green' }
  // Viết hàm xử lý sự kiện khi người dùng click vào nút Click
  let handleClick = () => {
    alert("Hello VTI!!!")
    console.log("Hello VTI!!!");

  }

  // 
  return (
    // <div className="App">
    // <h1>
    //   VTI Academy
    // </h1>
    // </div>
    // React.createElement('div', null, React.createElement('h1', null, "HELLO VTI!!!"))
    <>
      <div className="div_class">
        <h1>
          VTI!!!
        </h1>
      </div>
      <div>
        Academy
      </div>
      <button onClick={handleClick}>Click</button>
    </>

  );
}

export default App;
