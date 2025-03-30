
function MovieCard({id, title, genre, releaseYear, rating}) {
    
    return(
        <div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{genre}</div>
            <div>{releaseYear}</div>
            <div>{rating}</div>
        </div>
    )
}

export default MovieCard