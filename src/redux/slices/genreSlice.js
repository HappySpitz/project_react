import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    movies: [],
    genres: [],
    errors: null,
    loading: null,
    prev: null,
    next: null
};

const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, thunkAPI) => {
        try {
            const {data} = await genreService.getAllGenresList();
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const filterMovieGenres = createAsyncThunk(
  'genreSlice/filterMovieGenres',
  async ({genre_key, page}, thunkAPI) => {
      try {
          const {data} = await genreService.filterGenres(genre_key, page);
          return data
      } catch (e) {
          thunkAPI.rejectWithValue(e.response.data)
      }
  }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                const {genres} = action.payload;
                state.genres = genres
            })
            .addCase(filterMovieGenres.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.prev = page - 1;
                state.next = page + 1
            })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAllGenres,
    filterMovieGenres
}

export {
    genreReducer,
    genreActions
}
