import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

import coordinates from "../constants";
import { Figure } from "./figures/Figure";

const numbers = coordinates.y.reverse();
const letters = coordinates.x;

export class Board {
  cells: Cell[][] = [];
  figures: Figure[] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        const coordinate = letters[j] + numbers[i];
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(j, i, Colors.BLACK, coordinate)); //black cell
        } else {
          row.push(new Cell(j, i, Colors.WHITE, coordinate)); //white cell
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
    const blackKing = new King(this.getCell(0, 4), Colors.BLACK);
    const whiteKing = new King(this.getCell(7, 4), Colors.WHITE);
    this.figures.push(blackKing, whiteKing);
  }

  private addQueens() {
    const blackQueen = new Queen(this.getCell(0, 3), Colors.BLACK);
    const whiteQueen = new Queen(this.getCell(7, 3), Colors.WHITE);
    this.figures.push(blackQueen, whiteQueen);
  }

  private addBishops() {
    const firstBlackBishop = new Bishop(this.getCell(0, 2), Colors.BLACK);
    const secondBlackBishop = new Bishop(this.getCell(0, 5), Colors.BLACK);
    const firstWhiteBishop = new Bishop(this.getCell(7, 2), Colors.WHITE);
    const secondWhiteBishop = new Bishop(this.getCell(7, 5), Colors.WHITE);
    this.figures.push(
      firstBlackBishop,
      secondBlackBishop,
      firstWhiteBishop,
      secondWhiteBishop
    );
  }

  private addKnights() {
    const firstBlackKnight = new Knight(this.getCell(0, 1), Colors.BLACK);
    const secondBlackKnight = new Knight(this.getCell(0, 6), Colors.BLACK);
    const firstWhiteKnight = new Knight(this.getCell(7, 1), Colors.WHITE);
    const secondWhiteKnight = new Knight(this.getCell(7, 6), Colors.WHITE);
    this.figures.push(
      firstBlackKnight,
      secondBlackKnight,
      firstWhiteKnight,
      secondWhiteKnight
    );
  }

  private addRooks() {
    const firstBlackRook = new Rook(this.getCell(0, 0), Colors.BLACK);
    const secondBlackRook = new Rook(this.getCell(0, 7), Colors.BLACK);
    const firstWhiteRook = new Rook(this.getCell(7, 0), Colors.WHITE);
    const secondWhiteRook = new Rook(this.getCell(7, 7), Colors.WHITE);
    this.figures.push(
      firstBlackRook,
      secondBlackRook,
      firstWhiteRook,
      secondWhiteRook
    );
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      const blackPawn = new Pawn(this.getCell(1, i), Colors.BLACK);
      const whitePawn = new Pawn(this.getCell(6, i), Colors.WHITE);
      this.figures.push(blackPawn, whitePawn);
    }
  }
}
