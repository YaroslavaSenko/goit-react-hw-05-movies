import { useEffect, useState } from 'react';
import {fetchMovieByName} from '../services/fetchApi';
import MoviesList from '../components/MoviesList/MoviesList';
import { Outlet, useSearchParams } from 'react-router-dom';
 import SearchBar from '../components/SearchBar/SearchBar'; 
 
 
 const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState([null]);
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query');

const handleFormSubmit = search => {
    setSearchParams({ query: search });
    setError(null);
  };

        useEffect(() =>{
            if(!query) return;
            async function getMovieByName() {
            try {
                const movieData = await fetchMovieByName(query);
                setMovies(movieData.results)
                if (movieData.results.length === 0) {
                    alert(`${query} not found`);
                    return;
                  }
                              
            } catch (error) {
            setError(error)
            }
        }
        getMovieByName()
        }, [query])

        return(
            <main>
            {error && error.message}
            <SearchBar onSubmit={handleFormSubmit} />
      
            {movies && <MoviesList movies={movies} />}
      
            <Outlet />
          </main>
            )
      
  };

  export default Movie;
  