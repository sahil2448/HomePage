import React from "react";
import Pages1__2 from "./components/Pages1__2";
import Pages3__6 from "./components/Pages3__6";
const App = () => {
  return (
    <>
      <div className="main">
        <div className="Page1_2">
          <Pages1__2 />
        </div>
        <div className="Pages3__6">
          <Pages3__6 />
        </div>
      </div>
    </>
  );
};

export default App;
