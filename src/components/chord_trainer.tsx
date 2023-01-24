import React, { useState, useEffect } from "react";
import { customAlphabet } from "nanoid";

import { Chord } from "./chord";
import { ChordTemplate } from "./chord_template";

const chordWidth = 300;
const chordHeight = 400;

const nanoid = customAlphabet(
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
  10
);

export function ChordTrainer() {
  const [bpm, setBpm] = useState<number>(60);
  const [sound, setSound] = useState<boolean>(false);
  const [chords, setChords] = useState(["a"]);

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
        duration={bpm}
        remove={() => removeChord(chord)}
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
