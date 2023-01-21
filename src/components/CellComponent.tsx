import { FC } from "react";
import { Cell } from "../models/Cell";

interface IProps {
  cell: Cell;
}

const CellComponent: FC<IProps> = ({ cell }) => {
  return <div className={["cell", cell.color].join(" ")}></div>;
};

export default CellComponent;
