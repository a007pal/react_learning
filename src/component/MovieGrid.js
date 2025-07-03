import React,{useState, useEffect} from 'react';
import '../styles.css'
import MovieCard from './MovieCard';
export default function MovieGrid({movies, watchList, toggleWatchList}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [genre, setGenre] = useState('All Genres');
    const [rating, setRating] = useState('All');
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    const handleGenresChange = (e) => {
        setGenre(e.target.value);
    }
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const matchGenre = (movie, genre) => {
      return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }
    const matchSearchTerm = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const matchRating = (movie, rating) => {
        if(rating === "All"){return true;}
        if(rating==="Good" && movie.rating >=8){
            return true;
        }
        if(rating==="Ok" && movie.rating >=6 && movie.rating < 8){
            return true;
        }
        return rating === "Bad" && movie.rating < 6;

    }

    const filteredMovies = movies.filter(movie => matchGenre(movie,genre) && matchRating(movie,rating) && matchSearchTerm(movie,searchTerm))
    return(
       <div>
           <input className="search-input" type="text" placeholder="Search Movie..." value={searchTerm} onChange={handleSearch}/>
           <div className='filter-bar'>
               <div className='filter-slot'>
                   <label>Genre</label>
                   <select className='filter-dropdown' value={genre} onChange={handleGenresChange}>
                       <option>All Genres</option>
                       <option>Action</option>
                       <option>Fantasy</option>
                       <option>Drama</option>
                       <option>Horror</option>
                   </select>
               </div>
               <div className='filter-slot'>
                   <label>Rating</label>
                   <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                       <option>All</option>
                       <option>Good</option>
                       <option>Ok</option>
                       <option>Bad</option>
                   </select>
               </div>
           </div>
           <div className="movies-grid">
               {
                   filteredMovies.map(movie => (
                       <MovieCard movie={movie} key={movie.id}/>
                   ))
               }
           </div>
       </div>
    );
}