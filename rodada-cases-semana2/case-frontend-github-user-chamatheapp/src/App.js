import React from "react";
import GlobalState from "./global/GlobalState";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <GlobalState>
        <HomePage/>
      </GlobalState>
    </div>
  )
};

export default App;
