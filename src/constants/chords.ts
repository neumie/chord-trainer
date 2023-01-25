export type Note = [number, number | "x"];

export type Vexchord = {
  chord: Note[];
  position?: number;
}

export type ChordVariation = {
  id: string;
  name: string;
  vexchord: Vexchord;
};

export type Chord = ChordVariation[]

export type Chords = {
  [chord: string]: Chord;
};

export const chords: Chords = {
  cm: [
    {
      id: 'asd',
      name: 'C Major',
      vexchord: {
        chord: [
          [1, 2],
          [2, 1],
          [3, 2],
          [4, 0],
          [5, "x"],
          [6, "x"],
        ],
      },
    },
    {
      id: 'bsd',
      name: 'C Major second',
      vexchord: {
        chord: [
          [1, 0],
          [2, 1],
          [3, 0],
          [4, 2],
          [5, 3],
          [6, "x"],
        ],
      },
    }
  ],
  dm: [
    {
      id: 'ddd',
      name: 'C Major',
      vexchord: {
        chord: [
          [1, 2],
          [2, 1],
          [3, 2],
          [4, 0],
          [5, "x"],
          [6, "x"],
        ],
      },
    },
    {
      id: 'fff',
      name: 'C Major second',
      vexchord: {
        chord: [
          [1, 0],
          [2, 1],
          [3, 0],
          [4, 2],
          [5, 3],
          [6, "x"],
        ],
      },
    }
  ],
};
