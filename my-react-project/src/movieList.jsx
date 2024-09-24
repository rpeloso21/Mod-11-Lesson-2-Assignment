// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    const originalMovies = [
        {id: 1, title: 'Rushmore', description: 'A great movie about a kid who knows more than  most grown ups.', genre: 'comedy'},
        {id: 2, title: 'The French Dispatch', description: 'Bill Murray runs a news paper.', genre: 'comedy'},
        {id: 3, title: 'The Grand Budapest Hotel', description: 'A movie about art thieves and their endeavors.', genre: 'action'}
    ]

    const [movies, setMovies] = useState(originalMovies);
    const [allShowing, setAllShowing] = useState(true);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const toggleInfo = (id) => {
        setSelectedMovieId(selectedMovieId === id ? null: id);
    }

    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    const showAction = () => {
        setMovies(movies.filter((movie) => movie.genre === 'action'));
        setAllShowing(false)
    }

    const showAll = () => {
        setMovies(originalMovies);
        setAllShowing(true)
    }


    return (
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => toggleInfo(movie.id)}>
                        Title: {movie.title} <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                        {selectedMovieId === movie.id && <div>Descritpion: {movie.description}</div>}
                    </li>
                ))}
            </ul>
            <button onClick={allShowing ? showAction:showAll}>{allShowing ? 'Show action only': 'Show all'}</button>

        </div>
    );
};
export default MoviesList;