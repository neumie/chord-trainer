export type Note = [number, number | "x"];

export type Chord = {
  chord: Note[];
};

export type Chords = {
  [index: string]: Chord;
};

export const chords: Chords = {
  dm: {
    chord: [
      [1, 2],
      [2, 1],
      [3, 2],
      [4, 0],
      [5, "x"],
      [6, "x"],
    ],
  },
  cm: {
    chord: [
      [1, 0],
      [2, 1],
      [3, 0],
      [4, 2],
      [5, 3],
      [6, "x"],
    ],
  },
};
