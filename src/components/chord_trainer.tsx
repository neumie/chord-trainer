import React, { useState, useEffect } from "react";

import { ChordDiagram } from "./chord_diagram";
import { ChordTemplate } from "./chord_template";

const chordWidth = 300;
const chordHeight = 400;

type ChordTrainerProps = {
  start: boolean;
  bpm: number;
  selectedChords: string[];
};
export function ChordTrainer(props: ChordTrainerProps) {
  const convertedBpm: number = (60 / props.bpm) * 1000;
  const sound: boolean = true;
  const [chords, setChords] = useState<string[]>([]);
  let interval: any;

  //Starts rendering chords
  useEffect(() => {
    if (props.start) {
      interval = setInterval(() => {
        metronomeClick();
        addChord();
      }, convertedBpm);
    } else clearInterval(interval);
    return () => clearInterval(interval);
  }, [props.start]);

  function metronomeClick() {
    sound && new Audio("./../../metronome.mp3").play();
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

  function getRandomChordId() {
    const randomChordId =
      props.selectedChords[
        Math.floor(Math.random() * props.selectedChords.length)
      ];
    return randomChordId;
  }

  const chordElements = chords.map((chord) => {
    return (
      <ChordDiagram
        key={chord}
        id={chord}
        chordId={getRandomChordId()}
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
      {props.start && chordElements}
    </div>
  );
}
