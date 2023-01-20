import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //black cell
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); //white cell
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(y: number, x: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    this.addKings();
    this.addQueens();
    this.addBishops();
    this.addKnights();
    this.addRooks();
    this.addPawns();
  }

  private addKings() {
    new King(this.getCell(0, 4), Colors.BLACK);
    new King(this.getCell(7, 4), Colors.WHITE);
  }

  private addQueens() {
    new Queen(this.getCell(0, 3), Colors.BLACK);
    new Queen(this.getCell(7, 3), Colors.WHITE);
  }

  private addBishops() {
    new Bishop(this.getCell(0, 2), Colors.BLACK);
    new Bishop(this.getCell(0, 5), Colors.BLACK);
    new Bishop(this.getCell(7, 2), Colors.WHITE);
    new Bishop(this.getCell(7, 5), Colors.WHITE);
  }

  private addKnights() {
    new Knight(this.getCell(0, 1), Colors.BLACK);
    new Knight(this.getCell(0, 6), Colors.BLACK);
    new Knight(this.getCell(7, 1), Colors.WHITE);
    new Knight(this.getCell(7, 6), Colors.WHITE);
  }

  private addRooks() {
    new Rook(this.getCell(0, 0), Colors.BLACK);
    new Rook(this.getCell(0, 7), Colors.BLACK);
    new Rook(this.getCell(7, 0), Colors.WHITE);
    new Rook(this.getCell(7, 7), Colors.WHITE);
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(this.getCell(1, i), Colors.BLACK);
      new Pawn(this.getCell(6, i), Colors.WHITE);
    }
  }
}
