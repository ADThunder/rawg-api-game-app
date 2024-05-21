import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGameDetails, fetchAsyncGames } from "../utils/gameUtils";

const initialState = {
  games: [],
  gameStatus: STATUS.IDLE,
  gamesSingle: [],
  gamesSingleStatus: STATUS.IDLE,
  gamesDetails: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGames.pending, (state) => {
      state.gameStatus = STATUS.LOADING;
    });
    builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.gameStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsyncGames.rejected, (state) => {
      state.gameStatus = STATUS.FAILED;
    });
    builder.addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
      state.gamesSingle = action.payload;
      state.gamesSingleStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsyncGameDetails.rejected, (state) => {
      state.gamesSingleStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

export const selectAllGames = (state) => state.game.games.results;
export const selectAllGamesStatus = (state) => state.game.gamesStatus;
export const selectGamesNextPage = (state) => state.game.games.next;
export const selectGammesPrevPage = (state) => state.game.games.previous;
export const selectSingleGame = (state) => state.game.gamesSingle;
export const selectSingleGameStatus = (state) => state.game.gamesSingleStatus;
export const selectGameDetailss = (state) => state.game.gamesDetails;

export default gameSlice.reducer;
