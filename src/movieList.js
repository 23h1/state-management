import React,{useState, useContext} from 'react';
import Movie from './movie';
import { MovieContext } from './movieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {/* <h1>{value}</h1> */}
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}

        </div>
    );
}

export default MovieList;