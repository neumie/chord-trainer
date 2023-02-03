import React, { useEffect, useState } from "react";

// @ts-ignore
import { draw } from "@neumie/vexchords";
import "./chord-diagram.module.css";
import { Vexchord, chords as chordsData } from "../constants/chords";

type ChordDiagramProps = {
  key: string;
  id: string;
  chordId: string;
  width: number;
  height: number;
  duration: number;
  remove: Function;
};

export function ChordDiagram(props: ChordDiagramProps) {
  const duration = (props.duration / 1000) * 4;

  const [active, setActive] = useState(true);

  //get Vexchord object
  function getVexchord() {
    const chordData =
      chordsData.find((chord) => chord.id === props.chordId) || chordsData[0];
    const { notes, position, barres } = chordData;
    const vexchord: Vexchord = {
      chord: notes,
      position: position,
      barres: barres,
    };
    return vexchord;
  }

  function disable() {
    props.remove();
    setActive(false);
  }

  function drawChord() {
    draw(`.chord${props.id}`, getVexchord(), {
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
          className={`chord${props.id} chord absolute 
          [&>svg]:scale-[0.65] [&>svg]:sm:scale-[0.75] [&>svg]:md:scale-[0.85] [&>svg]:lg:scale-[1] [&>svg]:xl:scale-[1.1]`}
        ></div>
      )}
    </>
  );
}
