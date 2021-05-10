// 액션 타입 선언
const GET_MOVIES = "movies/GET_MOVIES" as const;

//액션 생성 함수
export const getMovies = (page: number) => ({
    type: GET_MOVIES,
    payload: [
        {
            id: 1,
            image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
            title: "Avengers Endgame",
            script_count: 30,
        },
        {
            id: 2,
            image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
            title: "Avengers Endgame",
            script_count: 145,
        },
        {
            id: 3,
            image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
            title: "Avengers Endgame",
            script_count: 145,
        },
        {
            id: 3,
            image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
            title: "Avengers Endgame",
            script_count: 145,
        },
        {
            id: 3,
            image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
            title: "Avengers Endgame",
            script_count: 145,
        },
        {
            id: 3,
            image_url: "https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg?type=m203_290_2",
            title: "Avengers Endgame",
            script_count: 145,
        },
    ],
});

type MoviesAction = ReturnType<typeof getMovies>;

export type Movie = {
    id : number,
    title: string;
    image_url: string;
    script_count: number;
};

export type MoviesState = Movie[];

const initialState: MoviesState = [];

function movies(
    state: MoviesState = initialState,
    action: MoviesAction
) : MoviesState {
    switch(action.type){
        case GET_MOVIES:
            return state = action.payload;
        default:
            return state;
    }
}

export default movies;