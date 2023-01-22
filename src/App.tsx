import React from "react";

import Navbar from "./components/Navbar";
import ChordTrainer from "./components/ChordTrainer";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App flex-col">
      <Navbar />
      <ChordTrainer />
      <Settings />
    </div>
  );
}

export default App;
