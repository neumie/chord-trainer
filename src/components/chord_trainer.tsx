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
  const [bpm, setBpm] = useState<number>(20);
  const [sound, setSound] = useState<boolean>(true);
  const [chords, setChords] = useState<string[]>([]);

  //Starts rendering chords
  useEffect(() => {
    const interval = setInterval(() => {
      sound && new Audio("./../../metronome.mp3").play();
      addChord();
    }, (60 / bpm) * 1000);
    return () => clearInterval(interval);
  }, []);

  //Adds a chord to the state
  function addChord() {
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
        duration={(60 / bpm) * 1000}
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
