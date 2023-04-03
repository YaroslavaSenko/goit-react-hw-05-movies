import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastName, CastImg, CastCharacter } from './Cast.styled'
import { fetchCast } from '../../services/fetchApi';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const response = await fetchCast(movieId);

      setCast(response.cast);
    };
    getCast();
  }, [movieId]);

  if (!cast) {
    return;
  }

  const poster = profile_path => {
    if (profile_path === null) {
      return 'https://via.placeholder.com/133x200.png';
    }
    return `https://image.tmdb.org/t/p/w300${profile_path}`;
  };

  return (
    <>
      <CastList>
        {cast.length !== 0 ? (
          cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <CastImg src={`${poster(profile_path)}`} alt="name" />
              <CastName>{name}</CastName>
              <CastCharacter>Character: {character}</CastCharacter>
            </li>
          ))
        ) : (
          <p>No info</p>
        )}
      </CastList>
    </>
  );
};

export default Cast;