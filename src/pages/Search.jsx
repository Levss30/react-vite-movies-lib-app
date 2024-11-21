import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./movieGrid.css"

const searchURL = import.meta.env.VITE_SEARCH
const apikey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()

  const[movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  return (
    <div className='container'>
      <h2 className='title'>Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search