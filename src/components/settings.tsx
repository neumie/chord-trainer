import React, { useState } from "react";

import Select from "react-select";
import { Number } from "./number";
import { chords as chordsData } from "../constants/chords";

export type SelectedChordsId = string[];

type SettingsProps = {
  isRunning: boolean;
  toggle: () => void;
  onChordChange: (selectedChords: string[]) => void;
  bpm: number;
  onBpmChange: (newBpm: number) => void;
};

export function Settings({
  isRunning,
  toggle,
  onChordChange,
  bpm,
  onBpmChange,
}: SettingsProps) {
  const options = chordsData.map((chord) => ({
    value: chord.id,
    label: chord.name,
  }));

  return (
    <div className="w-screen grid place-items-center">
      <form className="w-[75%] max-w-lg grid grid-cols-2 gap-2 grid-rows-[1fr_3em]">
        {/* Chord Select */}
        <Select
          className="row-span-1 col-span-full grid-"
          options={options}
          isMulti
          maxMenuHeight={300}
          menuPlacement={"top"}
          onChange={(selectedChords) => {
            const selectedChordsId = selectedChords.map((chord) => chord.value);
            onChordChange(selectedChordsId);
          }}
        />

        {/* BPM Select */}
        <div className="row-span-2 col-span-1 flex-col">
          <h2 className="text-center">BPM:</h2>
          <Number
            className="col-span-3"
            disabled={isRunning}
            bpm={bpm}
            onChange={onBpmChange}
          />
        </div>

        {/* START/STOP button */}
        <button
          className="row-span-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
        >
          {(isRunning && "STOP") || "START"}
        </button>
      </form>
    </div>
  );
}
