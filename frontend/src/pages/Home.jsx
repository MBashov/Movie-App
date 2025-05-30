import { useEffect, useState } from 'react'
import '../css/Home.css'

import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from '../services/api';
import Spinner from '../components/Spinner';

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

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchQuery.trim()) return;
        if (loading) return;
        
        setLoading(true);
        
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError('Failed to load movies...');
        } finally {
            setLoading(false);
        }
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

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <Spinner />
            ) : movies.length ? (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            ) : (<p className="not-found">No Movies Found</p>)}
        </div>
    );
}
