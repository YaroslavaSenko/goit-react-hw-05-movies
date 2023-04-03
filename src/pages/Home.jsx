 import { useEffect, useState } from 'react';
import {fetchTrendingMovies} from '../services/fetchApi';
import MoviesList from '../components/MoviesList/MoviesList';
  
 const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [error, setError] = useState([null]);

        useEffect(() =>{
            try {
                const getTrendingMovies = async() => {
                    const data = await fetchTrendingMovies()
                    setTrendingMovies(data.results)
                }
                getTrendingMovies()
                
            } catch (error) {
            setError(error)
            }
        }, [])

        return(
        <main>
            {error && error.message}
            <h2>Trendin movies</h2>

            {trendingMovies && <MoviesList movies={trendingMovies} />}

        </main>
            )
      
  };

  export default Home;
  