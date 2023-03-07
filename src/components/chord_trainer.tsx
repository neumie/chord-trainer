import React, { useState, useEffect } from "react";

import { ChordDiagram } from "./chord_diagram";
import { ChordTemplate } from "./chord_template";

const chordWidth = 350;
const chordHeight = 500;

type ChordTrainerProps = {
  start: boolean;
  bpm: number;
  selectedChords: string[];
  sound: boolean;
};

export function ChordTrainer({
  start,
  bpm,
  selectedChords,
  sound,
}: ChordTrainerProps) {
  const convertedBpm: number = (60 / bpm) * 1000;
  const [chords, setChords] = useState<string[]>([]);
  const [tick, setTick] = useState<boolean>();
  let interval: NodeJS.Timer;

  //Starts the chord trainer
  useEffect(() => {
    if (start) {
      interval = setInterval(() => {
        setTick((prev) => !prev);
      }, convertedBpm);
    } else reset();
    return () => reset();
  }, [start]);

  //Actions to do every tick
  useEffect(() => {
    metronomeClick();
    addChord();
  }, [tick]);

  //clear chords and clear interval
  function reset() {
    interval && clearInterval(interval);
    setChords([]);
  }

  //Checks if sound is enabled and plays metronome sound
  const metronomeClick = () => {
    sound && new Audio("./../../metronome.mp3").play();
  };

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
      selectedChords[Math.floor(Math.random() * selectedChords.length)];
    return randomChordId;
  }

  //Map over chords to produce JSX elements
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
      className={`w-full h-[450px] mt-[-75px] md:h-[500px] md:mt-[-50px] lg:h-[550px] lg:mt-[-30px] xl:h[600px] xl:mt-[-20px] relative`}
    >
      <ChordTemplate width={chordWidth} height={chordHeight} />
      {start && chordElements}
    </div>
  );
}
