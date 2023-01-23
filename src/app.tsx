import React from "react";

import { Navbar } from "./components/navbar";
import { ChordTrainer } from "./components/chord_trainer";
import { Settings } from "./components/settings";

export function App() {
  return (
    <div className="App flex-col">
      <Navbar />
      <ChordTrainer />
      <Settings />
    </div>
  );
}
