import React, { useEffect, useState } from "react";
// @ts-ignore
import { draw } from "@neumie/vexchords";
import "./chord.component.css";
import { Chord, Vexchord } from "../constants/chords";

type ChordDiagramProps = {
  key: string;
  id: string;
  vexchord: Vexchord;
  width: number;
  height: number;
  duration: number;
  remove: Function;
};

export function ChordDiagram(props: ChordDiagramProps) {
  const duration = (props.duration / 1000) * 4;

  const [active, setActive] = useState(true);

  function disable() {
    props.remove();
    setActive(false);
  }

  function drawChord() {
    console.log(props.vexchord);
    draw(`.chord${props.id}`, props.vexchord, {
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
          className={`chord${props.id} chord absolute`}
        ></div>
      )}
    </>
  );
}
