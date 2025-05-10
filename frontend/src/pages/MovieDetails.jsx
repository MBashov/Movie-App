import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../css/movieDetails.css'

import { getMovieDetails, getMovieRating, getMovieTrailer } from "../services/api";
import Spinner from "../components/Spinner";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [imdbRating, setImdbRating] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true)
                const movieData = await getMovieDetails(id);
                setMovie(movieData);

                const videos = await getMovieTrailer(id);
                const trailerVideo = videos?.results.find(v => v.type === 'Trailer' && v.site === 'YouTube');
                setTrailer(trailerVideo);

            } catch (err) {
                setError('Movie Not Found');
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchMovie()
    }, [id]);

    useEffect(() => {
        if (!movie?.imdb_id) return;

        const fetchMovieRating = async () => {
            try {
                const rating = await getMovieRating(movie.imdb_id);
                setImdbRating(rating);
            } catch (err) {
                console.error('Failed to fetch IMDb rating', err);
            }
        }

        fetchMovieRating();

    }, [movie?.imdb_id]);

    if (loading) {
        return <Spinner />
    }

    if (error || !movie) {
        return <div>{error}</div>
    }

    return (
        <div>
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <div className="movie-detail">
                <h1>{movie?.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
                <p>{movie?.overview}</p>
                <p>Release Date: {movie?.release_date}</p>
                <p>Genres: {movie?.genres?.map(g => g.name).join(', ')}</p>
                <p>Counry: {movie?.production_countries?.map(c => c.name).join(', ')}</p>
                <p>IMDB Rating: {imdbRating?.imdbRating}</p>

                {trailer && (
                    <div className="trailer">
                        <h2>{movie?.title}</h2>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}