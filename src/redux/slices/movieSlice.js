import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState = {
    movies: [],
    errors: null,
    loading: null,
    prev: null,
    next: null,
    movieById: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getMovies(page);
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async ({id}, thunkAPI) => {
        try {
           const {data} = await movieService.getMovieById(id);
           return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchMovies = createAsyncThunk(
  'movieSlice/searchMovies',
    async ({query, page}, thunkAPI) => {
        try {
           const {data} = await movieService.search(query, page);
           return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results;
                state.prev = page-1;
                state.next = page+1
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                const {results, page} = action.payload;
                state.movies = results
                state.prev = page-1;
                state.next = page+1
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getMovieById,
    searchMovies
};

export {
    movieActions,
    movieReducer
}