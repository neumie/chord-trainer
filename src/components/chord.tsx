import React, { useEffect, useState } from "react";
// @ts-ignore
import { draw } from "@neumie/vexchords";
import { customAlphabet } from "nanoid";
import chordList from "../constants/chords";
import "./Chord.component.css";

const nanoid = customAlphabet(
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
  10
);

type ChordProps = {
  key: string;
  id: string;
  width: number;
  height: number;
  duration: number;
  chord: string;
  remove: () => void;
};

export function Chord(props: ChordProps) {
  const chordId: string = nanoid();
  const duration = props.duration / 200;

  const [active, setActive] = useState(true);

  function disable() {
    props.remove();
    setActive(false);
  }

  function drawChord() {
    draw(`.${chordId}`, chordList[props.chord], {
      width: `${props.width}`,
      height: `${props.height}`,
    });
  }

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
              width: `${props.width}px`,
              height: `${props.height}px`,
            } as React.CSSProperties
          }
          className={`${chordId} chord absolute`}
        ></div>
      )}
    </>
  );
}
