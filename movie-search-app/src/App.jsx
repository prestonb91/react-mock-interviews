import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'
import './App.css'

const API_URL = "http://localhost:3000/movies";

function App() {

  const [movies, setMovies] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  
  const fetchMovies = async () => {
    const response = await fetch(API_URL, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json"
      }
    })
    const movieData = await response.json();
    setMovies(movieData); 
    setFetchingData(false);
  }
  
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
        <MovieList movies={movies} fetchingData={fetchingData}/>
    </div>
  )
}

export default App
