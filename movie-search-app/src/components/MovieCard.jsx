
function MovieCard({title, genre, releaseYear, rating}) {
    
    return(
        <div className="movie-card-container">
            <div>{title}</div>
            <div>{genre}</div>
            <div>{releaseYear}</div>
            <div>{rating}</div>
        </div>
    )
}

export default MovieCard