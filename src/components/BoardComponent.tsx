import React, { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
import { nanoid } from "nanoid";
import NumberComponent from "./NumberComponent";
import LetterComponent from "./LetterComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className="board">
      <NumberComponent position="left" />
      <NumberComponent position="right" />
      <LetterComponent position="top" />
      <LetterComponent position="bottom" />
      {board.cells.map((row) => (
        <React.Fragment key={nanoid()}>
          {row.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
