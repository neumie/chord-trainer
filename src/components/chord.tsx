import React, { useEffect, useState } from "react";
// @ts-ignore
import { draw } from "@neumie/vexchords";
import { customAlphabet } from "nanoid";
import { chords as chordList } from "../constants/chords";
import "./chord.component.css";

type ChordProps = {
  key: string;
  id: string;
  width: number;
  height: number;
  duration: number;
  remove: Function;
};

export function Chord(props: ChordProps) {
  const duration = (props.duration / 1000) * 4;

  const [active, setActive] = useState(true);

  function disable() {
    props.remove();
    setActive(false);
  }

  function getRandomChord() {
    const chordListLength = Object.keys(chordList).length;
    const randomChordIndex: number = Math.floor(
      Math.random() * chordListLength
    );
    const randomChord = Object.keys(chordList)[randomChordIndex];
    return chordList[randomChord];
  }

  function drawChord() {
    draw(`.${props.id}`, getRandomChord(), {
      width: `${props.width}`,
      height: `${props.height}`,
    });
  }

  //Chord lifespan
  useEffect(() => {
    drawChord();
    setTimeout(() => {
      disable();
    }, duration * 1000);
  }, []);

  return (
    <>
      {active && (
        <div
          style={
            {
              animationDuration: `${duration}s`,
              "--chord-width": `${props.width}px`,
              "--chord-height": `${props.height}px`,
            } as React.CSSProperties
          }
          className={`${props.id} chord absolute`}
        ></div>
      )}
    </>
  );
}
