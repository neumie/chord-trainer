export enum Tones {
  C = "C",
  G = "G",
}

export type Note = [number, number | "x"];

export type Vexchord = {
  chord: Note[];
  position?: number;
}

export type Chord = {
  id: string;
  name: string;
  tone: Tones;
  notes: Note[];
  position?: number;
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
]