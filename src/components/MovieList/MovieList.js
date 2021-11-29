import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link
            className={s.link}
            to={{
              pathname: `movies/${movie.id}`,
              state: {
                from: { location },
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
