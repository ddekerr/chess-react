import { FC } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

interface NumberProps {
  position: string;
}

const NumberComponent: FC<NumberProps> = ({ position }) => {
  return (
    <div
      className="number-column"
      style={position === "left" ? { left: -48 } : { right: -16 }}
    >
      {numbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
};

export default NumberComponent;
