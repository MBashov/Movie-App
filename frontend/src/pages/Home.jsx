import { useState } from 'react'

import MovieCard from "../components/MovieCard";

export default function Home() {

    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        { id: 1, title: 'Terminator', release_date: 1998 },
        { id: 2, title: 'John Wick', release_date: 2020 },
        { id: 3, title: 'Matrix', release_date: 2000 },
    ];

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
