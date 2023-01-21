import { FC } from "react";
import coordinates from "../constants";

interface NumberProps {
  position: string;
}

const NumberComponent: FC<NumberProps> = ({ position }) => {
  return (
    <div
      className="number-column"
      style={position === "left" ? { left: -48 } : { right: -16 }}
    >
      {coordinates.y.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
};

export default NumberComponent;
