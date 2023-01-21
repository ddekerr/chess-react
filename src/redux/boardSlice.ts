import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Figure } from "../models/figures/Figure";

type State = {
  figures: Figure[];
  selectedFigure: Figure | null;
};

const initialState: State = {
  figures: [],
  selectedFigure: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    selectFigure(state, action: PayloadAction<Figure>) {
      state.selectedFigure = action.payload;
    },
    moveFigure(state, action: PayloadAction<Figure>) {
      const figure = state.figures.find(
        (figure) => figure.id === action.payload.id
      );
      if (figure) {
        figure.cell = action.payload.cell;
      }
    },
  },
});

export const { selectFigure, moveFigure } = boardSlice.actions;
export const boardReduser = boardSlice.reducer;
