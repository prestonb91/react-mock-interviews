import MovieCard from "./MovieCard"
import { useState, useEffect } from "react";

function MovieList({movies, fetchingData}) {

    const [searchValue, setSearchValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    const handleSearchFilter = (e) => {
        let titleSearch = e.target.value;
        setSearchValue(titleSearch);

        if (titleSearch === "") {
            // reset to full movie list when search cleared
            setFilteredList(movies);
        } else {
            let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(titleSearch.toLowerCase()));
            setFilteredList(filteredMovies);
        }
    }

    const handleGenreFilter = (e) => {
        let selectedGenre = e.target.value;
        setSelectedGenre(selectedGenre);

        if (selectedGenre !== "All") {
            let filterByGenre = movies.filter(movie => movie.genre.includes(selectedGenre));
            setFilteredList(filterByGenre) 
        } else if (selectedGenre === "All") {
            setFilteredList(movies);
        }
    }

    // make sure filteredList updates when movies are fetched
    useEffect(()=> {
        setFilteredList(movies);
    }, [movies]); // dependency updates when movies are updated, for example after API fetch

    useEffect(() => {
        const populateGenres = () => {
            const genreList = movies.reduce((acc, movie) => {
                if (!acc.includes(movie.genre)) {
                    acc.push(movie.genre)
                }
                return acc;
            }, []);

            setGenres([ "All", ...genreList]);
        }

        populateGenres();
    }, [movies]);

    return(
        <div>
            <label>Search Bar</label>
            <input
                placeholder="Type to search"
                value={searchValue}
                onChange={handleSearchFilter}
            ></input>
            <div>{searchValue}</div>

            <label>Genre Filter</label>
            <select
                value={selectedGenre}
                onChange={handleGenreFilter}
            >
                {genres.map(genre =>
                    <option>{genre}</option>
                )}
            </select>

            {fetchingData 
            ?
                <div>Loading data...</div>
            :
                filteredList.map(movie => 
                    <MovieCard key={movie.id} {...movie}/>
                )
            }
        </div>
    )

}

export default MovieList