import React, { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import "./index.css";

const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newboard = new Board();
    newboard.initCells();
    newboard.addFigures();
    setBoard(newboard);
  };

  return (
    <div className="container">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
