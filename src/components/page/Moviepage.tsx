import React from 'react';
import MovieListContainer from '../../containers/movie/MovieListContainer';
import Header from '../common/Header';

const Moviepage = () => {
    return (
        <div>
            <Header/>
            <MovieListContainer/>
        </div>
    );
};

export default Moviepage;