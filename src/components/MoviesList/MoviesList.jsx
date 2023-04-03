import { useLocation } from "react-router-dom";
import { Container,  CardWrapper, MovieName,  } from "./MovieList.styled";
import { Link } from "react-router-dom";



const MoviesList = ({movies}) => {
const location = useLocation();
  const poster = poster_path => {
    if (poster_path === null) {
      return 'https://via.placeholder.com/300sx450.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

    return(
      <Container>
       {movies.map(
        ({ id, original_title, original_name, name, title, poster_path }) => (
        
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
          <img
                  src={`${poster(poster_path)}`}
                  alt={`${title || original_title || name}`}
                />
            <MovieName>{original_title || original_name}</MovieName>
          </Link>
        </CardWrapper>
        
      ))}
    </Container>
    )
        }
export default MoviesList;