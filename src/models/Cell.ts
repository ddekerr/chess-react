import { Colors } from "./Colors";
// import { Figure } from "./figures/Figure";
import { nanoid } from "nanoid";
// import { Board } from "./Board";

export class Cell {
  // board: Board;
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  // figure: Figure | null;
  available: boolean;
  id: string;
  coordinate: string;

  constructor(
    // board: Board,
    x: number,
    y: number,
    color: Colors,
    coordinate: string
    // figure: Figure | null
  ) {
    // this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
    // this.figure = figure;
    this.available = false;
    this.id = nanoid();
    this.coordinate = coordinate;
  }
}
