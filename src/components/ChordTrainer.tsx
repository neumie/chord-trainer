import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Chord from "./Chord";
import ChordTemplate from "./ChordTemplate";

const chordWidth = 300;
const chordHeight = 400;

function ChordTrainer() {
  const [bpm, setBpm] = useState<number>(30);
  const [sound, setSound] = useState<boolean>(false);
  const [chords, setChords] = useState([
    {
      key: "1",
      id: "1",
      width: chordWidth,
      height: chordHeight,
      bpm: bpm,
      chord: "dm",
      remove: () => removeChord("1"),
    },
  ]);

  //Starts rendering chords
  useEffect(() => {
    const interval = setInterval(() => {
      sound && new Audio("./../../metronome.mp3").play();
      addChord(chordWidth, chordHeight, (60 / bpm) * 1000, "cm");
    }, (60 / bpm) * 1000);
    return () => clearInterval(interval);
  }, []);

  //Adds a chord to the state
  function addChord(width: number, height: number, bpm: number, chord: string) {
    const id: string = nanoid();
    setChords((prev) => {
      return [
        ...prev,
        {
          key: id,
          id: id,
          width: width,
          height: height,
          bpm: bpm,
          chord: chord,
          remove: () => removeChord(id),
        },
      ];
    });
  }

  //Removes a chord from the state
  function removeChord(id: string) {
    setChords((prev) => {
      return prev.filter((chord) => {
        return chord.id !== id;
      });
    });
  }

  const chordElements = chords.map((chord) => {
    return (
      <Chord
        key={chord.key}
        id={chord.id}
        width={chord.width}
        height={chord.height}
        duration={chord.bpm}
        chord={chord.chord}
        remove={chord.remove}
      />
    );
  });
  return (
    <div className="w-full h-[400px] relative">
      <ChordTemplate />
      {chordElements}
    </div>
  );
}

export default ChordTrainer;
