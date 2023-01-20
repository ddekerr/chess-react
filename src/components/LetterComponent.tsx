import { FC } from "react";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface LetterProps {
  position: string;
}

const LetterComponent: FC<LetterProps> = ({ position }) => {
  return (
    <div
      className="letter-row"
      style={position === "top" ? { top: -32 } : { bottom: -32 }}
    >
      {letters.map((l) => (
        <div key={l}>{l}</div>
      ))}
    </div>
  );
};

export default LetterComponent;
