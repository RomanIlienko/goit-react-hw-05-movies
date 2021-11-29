import { useEffect, useState } from "react";
import MoviesList from "../Components/MovieList/MovieList";
import s from "./Views.module.css";
import { fetchTrendingMovies } from "../services/ApiMovies";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchTrendingMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
