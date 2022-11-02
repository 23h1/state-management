import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '£10',
            id: 22431
        },
        {
            name: 'Lost In Space',
            price: '£10',
            id: 22902
        },
        {
            name: 'Game of Thrones',
            price: '£10',
            id: 22574
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}