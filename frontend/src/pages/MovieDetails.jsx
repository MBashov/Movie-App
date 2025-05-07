import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieTrailer } from "../services/api";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    console.log(movie);
    console.log(trailer);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true)
                const movieData = await getMovieDetails(id);
                setMovie(movieData);

                const videos = await getMovieTrailer(id);
                console.log(videos);

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

    if (loading) {
        return <div>Loading...</div>
    }

    if (error || !movie) {
        return <div>{error}</div>
    }

    return (
        <div className="movie-detail">
            <h1>{movie?.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
            <p>{movie?.overview}</p>
            <p>Release Date: {movie?.release_date}</p>
            <p>Genres: {movie?.genres?.map(g => ([g.name, ' ']))}</p>
            <p>Counry: {movie?.origin_country?.join(', ')}</p>

            {trailer && (
                <div className="trailer">
                    <h2>{movie?.title}</h2>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${movie?.trailer?.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
}