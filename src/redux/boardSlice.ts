import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Figure } from "../models/figures/Figure";

export type StateBoard = {
  figures: Figure[];
  selectedFigure: Figure | null;
};

const initialState: StateBoard = {
  figures: [],
  selectedFigure: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initFigures(state, action: PayloadAction<Figure[]>) {
      state.figures = action.payload;
    },
    selectFigure(state, action: PayloadAction<Figure>) {
      state.selectedFigure = action.payload;
    },
  },
});

export const { initFigures, selectFigure } = boardSlice.actions;
export const boardReduser = boardSlice.reducer;
