import React, { useEffect, useState } from "react";

import { Navbar } from "./components/navbar";
import { ChordTrainer } from "./components/chord_trainer";
import { SelectedChordsId, Settings } from "./components/settings";

export function App() {
  const [start, setStart] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(30);
  const [sound, setSound] = useState<boolean>(false);
  const [selectedChords, setSelectedChords] = useState<string[]>([]);

  function toggleChordTrainer() {
    setStart((prev) => !prev);
  }

  function handleChordChange(selectedChordsId: SelectedChordsId) {
    setSelectedChords(selectedChordsId);
  }

  function handleBpmChange(bpm: number) {
    setBpm(bpm);
  }

  const handleSoundChange = () => {
    setSound((prev) => (prev = !prev));
  };

  return (
    <div className="flex flex-col justify-between overflow-hidden">
      <Navbar />
      {
        <ChordTrainer
          start={start}
          selectedChords={selectedChords}
          bpm={bpm}
          sound={sound}
        />
      }
      <Settings
        isRunning={start}
        toggle={toggleChordTrainer}
        bpm={bpm}
        sound={sound}
        onChordChange={handleChordChange}
        onBpmChange={handleBpmChange}
        onSoundChange={handleSoundChange}
      />
    </div>
  );
}
