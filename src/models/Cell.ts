import { Colors } from "./Colors";
import { nanoid } from "nanoid";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  available: boolean;
  id: string;
  coordinate: string;

  constructor(x: number, y: number, color: Colors, coordinate: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.available = false;
    this.id = nanoid();
    this.coordinate = coordinate;
  }
}
