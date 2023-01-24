import React from "react";
import Select from "react-select";

import { chords as chordList } from "../constants/chords";

export function Settings() {
  const options = Object.keys(chordList).map((chordKey) => ({
    value: chordKey,
    label: chordKey,
  }));
  console.log(options);

  return (
    <div>
      <form>
        <label>
          <input type="number" name="tempo" placeholder="60" />
          <Select options={options} />
        </label>
      </form>
    </div>
  );
}
