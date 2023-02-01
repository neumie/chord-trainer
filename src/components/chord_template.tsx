import React, { useEffect } from "react";
// @ts-ignore
import { draw } from "@neumie/vexchords";

type ChordProps = {
  width: number;
  height: number;
};

export function ChordTemplate(props: ChordProps) {
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
        width: `${props.width}`,
        height: `${props.height}`,
        defaultColor: "#34B233",
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
          width: `${props.width}px`,
          height: `${props.height}px`,
        } as React.CSSProperties
      }
      className={`ChordTemplate absolute left-0 right-0 m-auto drop-shadow-3xl opacity-50 
      [&>svg]:scale-[0.65] [&>svg]:sm:scale-[0.75] [&>svg]:md:scale-[0.85] [&>svg]:lg:scale-[1] [&>svg]:xl:scale-[1.1]`}
    ></div>
  );
}
