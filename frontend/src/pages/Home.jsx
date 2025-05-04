import MovieCard from "../components/MovieCard";

export default function Home() {

    const movies = [
        { id: 1, title: 'Terminator', release_date: 1998 },
        { id: 2, title: 'John Wick', release_date: 2020 },
        { id: 3, title: 'Matrix', release_date: 2000 },
    ]

    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
