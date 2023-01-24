import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Cell } from "../models/Cell";
import { Figure } from "../models/figures/Figure";

import { selectFigure } from "../redux/boardSlice";

interface IProps {
  cell: Cell;
  figures: Figure[];
}

const CellComponent: FC<IProps> = ({ cell, figures }) => {
  const dispatch = useAppDispatch();
  const selectedFigure = useAppSelector((state) => state.board.selectedFigure);

  const figure = figures.find(
    (figure) => figure.cell.x === cell.x && figure.cell.y === cell.y
  );

  const selectedClass =
    figure && selectedFigure?.id === figure?.id ? "selected" : "";

  return (
    <div className={["cell", cell.color, selectedClass].join(" ")}>
      {figure?.logo ? (
        <img
          src={figure?.logo}
          alt={figure?.name}
          onClick={() => dispatch(selectFigure(figure))}
          className={selectedClass}
        />
      ) : null}
    </div>
  );
};

export default CellComponent;
