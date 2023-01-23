import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ChordTrainer from "./components/ChordTrainer";
import Settings, { Option } from "./components/Settings";

function App() {
  const [start, setStart] = useState<Boolean>(false);
  const [selectedChords, setSelectedChords] = useState<Option>();

  function handleChordChange(options: Option) {
    setSelectedChords(options);
    setStart(true);
  }

  return (
    <div className="flex-col">
      <Navbar />
      {start && <ChordTrainer />}
      {/* {start && <ChordTrainer selectedChords={selectedChords} />} */}
      <Settings onChordChange={handleChordChange} />
    </div>
  );
}

export default App;
