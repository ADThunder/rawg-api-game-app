import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";
import creatorReducer from "./creatorSlice";

export default configureStore({
  reducer: {
    genre: genreReducer,
    game: gameReducer,
    sidebar: sidebarReducer,
    store: storeReducer,
    creator: creatorReducer,
  },
});
