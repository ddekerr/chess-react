import { Cell } from "../Cell";
import { Colors } from "../Colors";
import logo from "../../assets/black-bishop.png";
import { nanoid } from "nanoid";

export enum FigureNames {
  FIGURE = "Figure",
  KING = "King",
  QUEEN = "Queen",
  KNIGHT = "Knight",
  BISHOP = "Bishop",
  ROOK = "Rook",
  PAWN = "Pawn",
}

export class Figure {
  cell: Cell;
  color: Colors;
  logo: typeof logo | null;
  name: FigureNames;
  id: string;

  constructor(cell: Cell, color: Colors) {
    this.cell = cell;
    this.color = color;
    this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = nanoid();
    this.cell.figure = this;
  }

  canMove(target: Cell): Boolean {
    return true;
  }

  moveFigure(target: Cell): void {}
}
