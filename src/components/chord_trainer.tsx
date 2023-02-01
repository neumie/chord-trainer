import React, { useState, useEffect } from "react";

import { ChordDiagram } from "./chord_diagram";
import { ChordTemplate } from "./chord_template";

const chordWidth = 350;
const chordHeight = 500;

type ChordTrainerProps = {
  start: boolean;
  bpm: number;
  selectedChords: string[];
};

export function ChordTrainer(props: ChordTrainerProps) {
  const convertedBpm: number = (60 / props.bpm) * 1000;
  const sound: boolean = true;
  const [chords, setChords] = useState<string[]>([]);
  let interval: NodeJS.Timer;

  //Starts rendering chords
  useEffect(() => {
    if (props.start) {
      interval = setInterval(() => {
        metronomeClick();
        addChord();
      }, convertedBpm);
    } else reset();
    return () => reset();
  }, [props.start]);

  function reset() {
    interval && clearInterval(interval);
    setChords([]);
  }

  //Checks if sound is enabled and plays metronome sound
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
    <div
      className={`w-full h-full sm:h-[300px] md:h-[500px] l:h-[700px] xl:h[1000px] relative`}
    >
      <ChordTemplate width={chordWidth} height={chordHeight} />
      {props.start && chordElements}
    </div>
  );
}
