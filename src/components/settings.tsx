import React from "react";
import Select from "react-select";

import { Chord, chords as chordsData, Tones } from "../constants/chords";

export function Settings() {
  const options = chordsData.map((chord) => ({
    value: chord.id,
    label: chord.name,
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
