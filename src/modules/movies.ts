import { AxiosError } from "axios";
import { ThunkAction } from "redux-thunk";
import { action, createAction, createReducer } from "typesafe-actions";
import { RootState } from ".";
import { getMoviesFile, MovieListPage } from "../api/memorize";

// 액션 타입 선언
const GET_MOVIES = "movies/GET_MOVIES" as const;
const GET_MOVIES_SUCCESS = "movies/GET_MOVIES_SUCCESS" as const;
const GET_MOVIES_ERROR = "movies/GET_MOVIES_ERROR" as const;

//액션 생성 함수
export const getMovies = createAction(GET_MOVIES)();
export const getMoviesSuccess = createAction(GET_MOVIES_SUCCESS)<MovieListPage>();
export const getMoviesError = createAction(GET_MOVIES_ERROR)<AxiosError>();

export function getMoviesThunk(offset: number, title: string | null = null, limit: number = 16): ThunkAction<void, RootState, null, MoviesAction> {
    return async (dispatch) => {
        dispatch(getMovies());
        try {
            const moviesPage = await getMoviesFile(offset, title, limit);
            dispatch(getMoviesSuccess(moviesPage));
        } catch (e) {
            dispatch(getMoviesError(e));
        }
    };
}

type MoviesAction = ReturnType<typeof getMovies | typeof getMoviesSuccess | typeof getMoviesError>;

export type MoviePageState = {
    moviesFile: {
        loading: boolean;
        error: Error | null;
        data: MovieListPage | null;
    };
};

const initialState: MoviePageState = {
    moviesFile: {
        loading: false,
        error: null,
        data: null,
    },
};

const movies = createReducer<MoviePageState, MoviesAction>(initialState, {
    [GET_MOVIES_ERROR]: (state) => ({
        ...state,
        moviesFile: {
            loading: true,
            error: null,
            data: null,
        },
    }),
    [GET_MOVIES_SUCCESS]: (state, action) => ({
        ...state,
        moviesFile: {
            loading: false,
            error: null,
            data: action.payload,
        },
    }),
    [GET_MOVIES_ERROR]: (state, action) => ({
        ...state,
        moviesFile: {
            loading: false,
            error: action.payload,
            data: null,
        },
    }),
});

export default movies;
