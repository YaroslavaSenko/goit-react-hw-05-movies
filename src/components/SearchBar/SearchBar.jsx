import { useState } from 'react';
import { Input, Wrapper, Button } from './SearchBar.styled';

 const SearchBar = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const inputHandler = e => {
    setMovieName(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movieName === '') {
      alert('Please enter something');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input value={movieName} onChange={inputHandler} />
        <Button type="submit">Search</Button>
      </form>
    </Wrapper>
  );
};

export default SearchBar;