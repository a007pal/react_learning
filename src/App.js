import './App.css';
import './styles.css'
import Header from './component/Header';
import Footer from './component/Footer';
import MovieGrid from "./component/MovieGrid";
import WatchList from "./component/WatchList";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {
    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    },[])
    const toggleWatchList = (movieId) => {
        setWatchList(prev =>
            prev.includes(movieId)? prev.filter(id => id !== movieId): [...prev, movieId]
        )
    }
  return (
    <div className="App">
        <div className="container">
            <Header />
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/watchlist">Watch List</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<MovieGrid movies={movies} watchList ={watchList} toggleWatchList={toggleWatchList}/>}/>
                    <Route path="/watchlist" element={<WatchList movies={movies} watchList ={watchList} toggleWatchList={toggleWatchList}/>}/>
                </Routes>
            </Router>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
