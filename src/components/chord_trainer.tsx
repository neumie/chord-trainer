import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { Chord } from "./chord";
import { ChordTemplate } from "./chord_template";

const chordWidth = 300;
const chordHeight = 400;

// type ChordTrainerProps = {
//   selectedChords: [];
// };

type ChordType = {
  key: string;
  id: string;
  width: number;
  height: number;
  bpm: number;
  chord: string;
  remove: Function;
};

export function ChordTrainer() {
  // function ChordTrainer(props: ChordTrainerProps) {
  const [start, setStart] = useState<Boolean>(false);
  const [bpm, setBpm] = useState<number>(100);
  const [sound, setSound] = useState<boolean>(false);
  const [chords, setChords] = useState<ChordType | null>();

  //Starts rendering chords
  useEffect(() => {
    console.log("fired");
    const interval = setInterval(() => {
      sound && new Audio("./../../metronome.mp3").play();
      addChord(chordWidth, chordHeight, (60 / bpm) * 1000, "cm");
    }, (60 / bpm) * 1000);
    return () => clearInterval(interval);
  }, []);

  //Adds a random chord to the state
  function addChord(width: number, height: number, bpm: number, chord: string) {
    const id: string = nanoid();
    setChords((prev) => {
      return [
        ...(prev || {}),
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

  // function getRandomChord() {
  //   const randomIndex = Math.floor(Math.random() * props.selectedChords.length);
  // }

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
