import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem, ReviewAuthor } from './Reviews.styled';
import { fetchReviews } from 'services/fetchApi';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetchReviews(movieId);
      setReviews(response.results);
    };
    getReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(({ id, author, content }) => (
          <ReviewItem key={id}>
            <ReviewAuthor>Author: {author}</ReviewAuthor>
            <p>{content}</p>
          </ReviewItem>
        ))
      ) : (
        <p>We don't hawe any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;