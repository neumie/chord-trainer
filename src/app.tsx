import React, { useState } from "react";

import { Navbar } from "./components/navbar";
import { ChordTrainer } from "./components/chord_trainer";
import { SelectedChordsId, Settings } from "./components/settings";

export function App() {
  const [start, setStart] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(30);
  const [selectedChords, setSelectedChords] = useState<string[]>([]);

  function toggleChordTrainer() {
    setStart((prev) => !prev);
  }

  function handleChordChange(selectedChordsId: SelectedChordsId) {
    setSelectedChords(selectedChordsId);
  }

  function handleBpmChange(bpm: number) {
    console.log(bpm);
    setBpm(bpm);
  }

  return (
    <div className="flex-col">
      <Navbar />
      {start && <ChordTrainer selectedChords={selectedChords} bpm={bpm} />}
      <Settings
        isRunning={start}
        toggle={toggleChordTrainer}
        bpm={bpm}
        handleChordChange={handleChordChange}
        handleBpmChange={handleBpmChange}
      />
    </div>
  );
}
