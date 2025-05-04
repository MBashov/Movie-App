import { useEffect, useState } from 'react'
import '../css/Home.css'

import MovieCard from "../components/MovieCard";
import { getPopularMovies } from '../services/api';

export default function Home() {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const popularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError('Failed to load movies...');
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        popularMovies();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchQuery);

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
