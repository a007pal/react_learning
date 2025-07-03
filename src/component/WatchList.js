import React from 'react';
import '../styles.css'
import MovieGrid from "./MovieGrid";
import MovieCard from "./MovieCard";

export default function WatchList({movies, watchList, toggleWatchList}) {
    return (
        <div>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {
                    watchList.map(movieId => {
                        const movie = movies.find(movie => movie.id === movieId);
                        return <MovieCard movie={movie} toggleWatchList={toggleWatchList} isWatchListed={true}
                                          key={movie.id}/>
                    })
                }
            </div>
        </div>
    );
}