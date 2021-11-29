import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchSearchMovies } from "../services/ApiMovies";
import Spinner from "../Components/Loader/Loader";

import Searchbar from "../Components/SearchBar/Searchbar";
import MoviesList from "../Components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [movieName, setMovieName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const searchURL = new URLSearchParams(location.search).get("query") ?? "";
  useEffect(() => {
    if (!movieName) {
      return;
    }

    function fetchMovies() {
      setIsLoading(true);
      fetchSearchMovies(movieName)
        .then((movies) => {
          setMovies(movies.results);
          if (!movies.results.length) {
            toast.error("No matches were found! Try again");
            return;
          }
        })
        .catch((error) => {
          throw new Error("Something went wrong. Try again!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    fetchMovies();
  }, [movieName]);

  useEffect(() => {
    if (searchURL === "") {
      return;
    }
    setMovieName(searchURL);
  }, [searchURL]);

  const getHistory = (movieName) => {
    history.push({
      ...location,
      search: `query=${movieName}`,
    });
  };

  const searchMovie = (movieName) => {
    setMovieName(movieName);
    getHistory(movieName);
  };

  return (
    <>
      <Searchbar onSubmit={searchMovie} />
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Spinner />}
      <ToastContainer autoClose={3000} />
    </>
  );
}
