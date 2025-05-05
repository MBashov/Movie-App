import '../css/Favorites.css'
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../context/MovieContext';

export default function Favorites() {
    const { favorites } = useMovieContext();

    return (
        <div className='favorites-page'>
            <p>Start adding movies to your favorites and they will appear hear!</p>
            {favorites.length > 0 ? (
                <div className="favorites">
                    <h2>Your Favorites</h2>
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorites Movies Yet</h2>
                </div>

            )}
        </div>
    );
}