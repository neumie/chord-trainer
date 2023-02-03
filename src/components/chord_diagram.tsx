import React, { useEffect, useState } from "react";

// @ts-ignore
import { draw } from "@neumie/vexchords";
import "./chord-diagram.component.css";
import { Vexchord, chords as chordsData } from "../constants/chords";

type ChordDiagramProps = {
  key: string;
  id: string;
  chordId: string;
  width: number;
  height: number;
  duration: number;
  remove: () => void;
};

export function ChordDiagram({
  id,
  chordId,
  width,
  height,
  duration,
  remove,
}: ChordDiagramProps) {
  const animationDuration = (duration / 1000) * 4;

  //get Vexchord object
  function getVexchord() {
    const chordData =
      chordsData.find((chord) => chord.id === chordId) || chordsData[0];
    const { notes, position, barres } = chordData;
    const vexchord: Vexchord = {
      chord: notes,
      position: position,
      barres: barres,
    };
    return vexchord;
  }

  function disable() {
    remove();
  }

  function drawChord() {
    draw(`.chord${id}`, getVexchord(), {
      width: `${width}`,
      height: `${height}`,
    });
  }

  //Chord lifespan
  useEffect(() => {
    drawChord();
    setTimeout(() => {
      disable();
    }, animationDuration * 1000);
  }, []);

  return (
    <>
      <div
        style={
          {
            animationDuration: `${animationDuration}s`,
            "--chord-width": `${width}px`,
            "--chord-height": `${height}px`,
          } as React.CSSProperties
        }
        className={`chord${id} chord absolute 
        [&>svg]:scale-[0.65] [&>svg]:sm:scale-[0.75] [&>svg]:md:scale-[0.85] [&>svg]:lg:scale-[1] [&>svg]:xl:scale-[1.1]`}
      ></div>
    </>
  );
}
