import React, { useState } from "react";

import { Navbar } from "./components/navbar";
import { ChordTrainer } from "./components/chord_trainer";
import { Settings } from "./components/settings";

export function App() {
  const [start, setStart] = useState<boolean>(true);
  // const [selectedChords, setSelectedChords] = useState<Option>();

  // function handleChordChange(options: Option) {
  //   setSelectedChords(options);
  //   setStart(true);
  // }

  return (
    <div className="flex-col">
      <Navbar />
      {start && <ChordTrainer />}
      {/* {start && <ChordTrainer selectedChords={selectedChords} />} */}
      {/* <Settings onChordChange={handleChordChange} /> */}
    </div>
  );
}
