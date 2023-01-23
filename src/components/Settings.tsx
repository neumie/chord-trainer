import React, { useState } from "react";
import Select from "react-select";

import chordList from "../../chords";

export type Option = unknown;

type SettingsProps = {
  onChordChange: (value: Option) => void;
};

function Settings(props: SettingsProps) {
  const options: Option[] = Object.keys(chordList).map((chordKey) => ({
    value: chordKey,
    label: chordKey,
  }));

  function changeChords(option: readonly Option[]) {
    props.onChordChange(option);
  }

  return (
    <div>
      <form>
        <label>
          <input type="number" name="tempo" placeholder="60" />
        </label>
        <label>
          <Select options={options} isMulti onChange={changeChords} />
        </label>
      </form>
    </div>
  );
}

export default Settings;
