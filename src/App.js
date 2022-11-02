import './App.css';
import React from 'react';
import MovieList from './movieList'
import Nav from './nav';
import AddMovie from './addMovie'
import { MovieProvider } from './movieContext';


function App() {

  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
