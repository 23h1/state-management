import React,{useContext} from 'react';
import { MovieContext } from './movieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    
    return (
        <>       
    
        <div>
            <h3>These are Abhi's top {movies.length} movie picks</h3>
            <p>Here are the {movies.length} Movies: </p>

        </div>
        </>
    );
}

export default Nav;