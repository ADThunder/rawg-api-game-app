import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { API_KEY } from "../../api/api_key";
import { apiURL } from "../../constants";

export const fetchAsyncGenres = createAsyncThunk(
  "genres/fetch",
  async (page = 1) => {
    const { data } = await axios.get(
      `${apiURL.genresURL}?${API_KEY}&page=${page}`
    );
    return data;
  }
);
