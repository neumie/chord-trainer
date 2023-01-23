import React, { useEffect } from "react";
// @ts-ignore
import { draw } from "@neumie/vexchords";

const chordWidth = 300;
const chordHeight = 400;

export function ChordTemplate() {
  function drawChord() {
    draw(
      ".ChordTemplate",
      {
        chord: [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
        ],
      },
      {
        width: `${chordWidth}`,
        height: `${chordHeight}`,
        defaultColor: "#745",
        stringWidth: 2,
        fretWidth: 3,
      }
    );
  }

  useEffect(() => {
    drawChord();
  }, []);

  return (
    <div
      style={
        {
          width: `${chordWidth}px`,
          height: `${chordHeight}px`,
        } as React.CSSProperties
      }
      className={`ChordTemplate absolute left-0 right-0 m-auto drop-shadow-3xl opacity-50`}
    ></div>
  );
}
