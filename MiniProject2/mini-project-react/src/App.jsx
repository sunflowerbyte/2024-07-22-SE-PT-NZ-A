import React from "react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Drinks from "./components/Drinks";
import About from "./components/About";
import Cats from "./components/Cats";

const App = () => {
  return (
    <div>
      <Dashboard/>
      <main>
        <div id="home">
          <Home></Home>
        </div>
<div id="drinks">
  <Drinks></Drinks>
</div>

<div id="about">
  <About></About>
</div>
<div>
  <Cats></Cats>
</div>

      </main>
    </div>
  );
};

export default App;