import { FC } from "react";
import { Cell } from "../models/Cell";

import { Figure } from "../models/figures/Figure";

interface IProps {
  cell: Cell;
  figures: Figure[];
}

const CellComponent: FC<IProps> = ({ cell, figures }) => {
  const figure = figures.find(
    (figure) => figure.cell.x === cell.x && figure.cell.y === cell.y
  );

  return (
    <div className={["cell", cell.color].join(" ")}>
      {figure?.logo ? <img src={figure?.logo} alt={figure?.name} /> : null}
    </div>
  );
};

export default CellComponent;
