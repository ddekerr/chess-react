import React, { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
import "./index.css";
import { useAppDispatch } from "./hooks";
import { initFigures } from "./redux/boardSlice";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newboard = new Board();
    newboard.initCells();
    newboard.addFigures();
    const figures = newboard.figures;
    dispatch(initFigures(figures));
    setBoard(newboard);
  }, [dispatch]);

  return (
    <div className="container">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
