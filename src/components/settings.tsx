import React from "react";
import Select from "react-select";

import { chords as chordsData } from "../constants/chords";

export type SelectedChordsId = string[];

type SettingsProps = {
  isRunning: boolean;
  toggle: Function;
  handleChordChange: Function;
};

export function Settings(props: SettingsProps) {
  const options = chordsData.map((chord) => ({
    value: chord.id,
    label: chord.name,
  }));

  return (
    <div>
      <form>
        <label>
          <input type="number" name="tempo" placeholder="60" />
        </label>
        <Select
          options={options}
          isMulti
          onChange={(selectedChords) => {
            const selectedChordsId = selectedChords.map((chord) => chord.value);
            props.handleChordChange(selectedChordsId);
          }}
        />
      </form>
      <button onClick={() => props.toggle()}>
        {(props.isRunning && "STOP") || "START"}
      </button>
    </div>
  );
}
