import axios, { AxiosResponse } from "axios";

export async function getMoviesFile(offset: number, title: string | null, limit: number ) {
    let response: AxiosResponse<MovieListPage>;
    if (title === null) {
        response = await axios.get<MovieListPage>(`http://127.0.0.1:8080/movies?offset=${offset}&limit=${limit}`);
    } else {
        response = await axios.get<MovieListPage>(`http://127.0.0.1:8080/movies?offset=${offset}&limit=${limit}&title=${title}`);
    }

    return response.data;
}

export interface Movie {
    id: number;
    k_title: string;
    e_title: string;
    thumbnail: string;
}

export interface MovieListPage {
    last_page: number;
    cur_page: number;
    movie_list: Movie[];
}

export interface Script {
    id: number;
    movie_id: number;
    start_second: number;
    end_second: number;
    caption: string;
    thumbnail: string;
}

export interface ScriptListPage {
    script_list: Script[];
    last_page: number;
    cur_page: number;
}
