import React, { useState, useEffect } from "react";

import { Chord } from "./chord";
import { ChordTemplate } from "./chord_template";

const chordWidth = 300;
const chordHeight = 400;

export function ChordTrainer() {
  const bpm: number = 20;
  const convertedBpm: number = (60 / bpm) * 1000;
  const sound: boolean = true;
  const metronome = new Audio("./../../metronome.mp3");
  const [chords, setChords] = useState<string[]>([]);

  //Starts rendering chords
  useEffect(() => {
    const interval = setInterval(() => {
      metronomeClick();
      addChord();
    }, convertedBpm);
    return () => clearInterval(interval);
  }, []);

  function metronomeClick() {
    sound && metronome.play();
  }

  //Adds a chord to the state
  function addChord() {
    const id: string = self.crypto.randomUUID();
    setChords((prev) => {
      return [...prev, `${id}`];
    });
  }

  //Removes a chord from the state
  function removeChord(id: string) {
    setChords((prev) => {
      return prev.filter((chord) => {
        return chord !== id;
      });
    });
  }

  const chordElements = chords.map((chord) => {
    return (
      <Chord
        key={chord}
        id={chord}
        width={chordWidth}
        height={chordHeight}
        duration={convertedBpm}
        remove={() => removeChord(chord)}
      />
    );
  });

  return (
    <div className="w-full h-[400px] relative">
      <ChordTemplate width={chordWidth} height={chordHeight} />
      {chordElements}
    </div>
  );
}
