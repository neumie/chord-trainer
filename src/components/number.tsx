import React from "react";

type NumberProps = {
  className: string;
  disabled: boolean;
  bpm: number;
  onChange: (newBpm: number) => void;
};

export const Number = ({ className, disabled, bpm, onChange }: NumberProps) => {
  return (
    <div className={`grid grid-cols-3 w-auto ${className}`}>
      {/* MINUS ONE BUTTON */}
      <button
        disabled={disabled}
        className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded"
        onClick={(e) => {
          e.preventDefault();
          onChange(bpm - 1);
        }}
      >
        -
      </button>
      {/* BPM */}
      <input
        disabled={disabled}
        className="text-center"
        type="number"
        name="tempo"
        value={bpm}
        onChange={(e) => onChange(e.target.valueAsNumber)}
      />
      {/* PLUS ONE BUTTON */}
      <button
        disabled={disabled}
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-1 px-2 border-b-4 border-green-700 hover:border-green-500 rounded"
        onClick={(e) => {
          e.preventDefault();
          onChange(bpm + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
