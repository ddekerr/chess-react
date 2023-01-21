import { FC } from "react";
import coordinates from "../constants";

interface LetterProps {
  position: string;
}

const LetterComponent: FC<LetterProps> = ({ position }) => {
  return (
    <div
      className="letter-row"
      style={position === "top" ? { top: -32 } : { bottom: -32 }}
    >
      {coordinates.x.map((l) => (
        <div key={l}>{l}</div>
      ))}
    </div>
  );
};

export default LetterComponent;
