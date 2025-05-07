export default function MovieDetails() {
    return (
        <div className="movie-detail">
            <h1>Movie Title</h1>
            <img src={'movie source'} alt={'Movie Title'} />
            <p>{'Movie Overview'}</p>
            <p>Release Date: {'movie.release_date'}</p>
            <p>Genres: {'Movie genre'}</p>

 
        </div>
    );
}