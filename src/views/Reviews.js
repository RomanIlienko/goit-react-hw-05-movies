import { fetchReviews } from "../services/ApiMovies";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import s from "./Views.module.css";

export default function Reviews({ movieId }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then((response) => {
      setReview(response.results);
      console.log(setReview);
    });
  }, [movieId]);

  return (
    <>
      {review.length > 0 ? (
        <ul>
          {review.map((review) => (
            <li key={review.id}>
              <h3 className={s.authorReviews}>{review.author}</h3>
              <p>Character: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.text}>We don't have any reviews for this movie </p>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
