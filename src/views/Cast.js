import { fetchCredits } from "../services/ApiMovies";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import s from "./Views.module.css";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCredits(movieId).then((response) => {
      setCast(response.cast);
    });
  }, [movieId]);

  return (
    cast && (
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="120"
              height="150"
            ></img>
            <div className={s.actorWrapper}>
              <h3 className={s.actorName}>{actor.name}</h3>
              <p className={s.actorCharacter}>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
