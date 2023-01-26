import React, { useState } from "react";

import { Navbar } from "./components/navbar";
import { ChordTrainer } from "./components/chord_trainer";
import { SelectedChordsId, Settings } from "./components/settings";

export function App() {
  const [start, setStart] = useState<boolean>(false);
  const [selectedChords, setSelectedChords] = useState<string[]>([]);

  function startChordTrainer() {
    setStart(true);
  }

  function handleChordChange(selectedChordsId: SelectedChordsId) {
    setSelectedChords(selectedChordsId);
  }

  return (
    <div className="flex-col">
      <Navbar />
      {start && <ChordTrainer selectedChords={selectedChords} />}
      <Settings
        start={startChordTrainer}
        handleChordChange={handleChordChange}
      />
    </div>
  );
}
