import React, { useState } from "react";

type NumberProps = {
  className: string;
  disabled: boolean;
  bpm: number;
  handleBpmChange: Function;
};

export function Number(props: NumberProps) {
  return (
    <div className={`grid grid-cols-3 w-auto ${props.className}`}>
      {/* MINUS ONE BUTTON */}
      <button
        disabled={props.disabled}
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={(e) => {
          e.preventDefault();
          props.handleBpmChange(props.bpm - 1);
        }}
      >
        -
      </button>
      {/* BPM */}
      <input
        disabled={props.disabled}
        className="text-center"
        type="number"
        name="tempo"
        value={props.bpm}
        onChange={(e) => props.handleBpmChange(e.target.value)}
      />
      {/* PLUS ONE BUTTON */}
      <button
        disabled={props.disabled}
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-2 border-b-4 border-green-700 hover:border-green-500 rounded"
        onClick={(e) => {
          e.preventDefault();
          props.handleBpmChange(props.bpm + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
