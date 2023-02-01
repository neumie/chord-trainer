export enum Tones {
  A = "A",
  B = "B",
  C = "C",
  G = "G",
  D = "D",
  E = "E",
  F = "F",
}

export type Note = [number, number | "x"];

export type Vexchord = {
  chord: Note[];
  position?: number;
  barres?: { fromString: number, toString: number, fret: number }[];
}

export type Chord = {
  id: string;
  name: string;
  tone: Tones;
  notes: Note[];
  position?: number;
  barres?: { fromString: number, toString: number, fret: number }[];
}

export const chords: Chord[] = [{
    id: "1",
    name: "C",
    tone: Tones.C,
    notes: [
            [1, 0],
            [2, 1],
            [3, 0],
            [4, 2],
            [5, 3],
            [6, "x"],
          ],
  },
  {
    id: "2",
    name: "G",
    tone: Tones.G,
    notes: [
            [1, 3],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 2],
            [6, 3],
          ],
  },
  {
    id: "3",
    name: "D",
    tone: Tones.D,
    notes: [
            [1, 2],
            [2, 3],
            [3, 2],
            [4, 0],
            [5, 'x'],
            [6, 'x'],
          ],
  },
  {
    id: "4",
    name: "E",
    tone: Tones.E,
    notes: [
            [1, 0],
            [2, 0],
            [3, 1],
            [4, 2],
            [5, 2],
            [6, 0],
          ],
  },
  {
    id: "5",
    name: "F",
    tone: Tones.F,
    notes: [
            [1, 1],
            [2, 1],
            [3, 2],
            [4, 3],
            [5, 3],
            [6, 1],
          ],
    barres: [{ fromString: 6, toString: 1, fret: 1 }],
  },
  {
    id: "6",
    name: "A",
    tone: Tones.A,
    notes: [
            [1, 0],
            [2, 2],
            [3, 2],
            [4, 2],
            [5, 0],
            [6, 'x'],
          ],
  },
  {
    id: "7",
    name: "B",
    tone: Tones.B,
    notes: [
            [1, 2],
            [2, 4],
            [3, 4],
            [4, 4],
            [5, 2],
            [6, 'x'],
          ],
    barres: [{ fromString: 5, toString: 1, fret: 2 }],
  },
]