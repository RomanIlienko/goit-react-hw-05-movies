import { useEffect, useState, lazy, Suspense } from "react";
import {
  useRouteMatch,
  useParams,
  NavLink,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";
import { fetchOneMovie } from "../services/ApiMovies";
import Spinner from "../Components/Loader/Loader";
import s from "./Views.module.css";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const Cast = lazy(() => import("./Cast" /* webpackChunkName: "cast-view" */));
const Reviews = lazy(() =>
  import("./Reviews" /* webpackChunkName: "reviews-view" */)
);

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchOneMovie(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };
  return (
    <>
      {movie && (
        <>
          <div>
            <button type="button" onClick={onGoBack} className={s.button}>
              Go back
            </button>
          </div>
          <div className={s.container}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className={s.image}
            />

            <div className={s.wrapper}>
              <h2 className={s.titleMovie}>{movie.title}</h2>
              <p>User score: {movie.vote_average}</p>
              <h3 className={s.titleMovieBlock}>Overview</h3>
              <p>{movie.overview}</p>
              <h3 className={s.titleMovieBlock}>Genres</h3>
              <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
            </div>
          </div>
          <div>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? "/" },
              }}
              className={s.link}
            >
              Cast
            </NavLink>
          </div>
          <div>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? "/" },
              }}
              className={s.link}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense fallback={<Spinner />}>
            <Route path={`${path}/cast`}>
              <Cast movieId={movieId} />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
