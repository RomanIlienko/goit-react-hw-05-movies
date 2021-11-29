import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState("");

  const handleChange = (e) => {
    setMovieName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName.trim() === "") {
      toast.info("Enter movie name");
      return;
    }
    onSubmit(movieName);
    setMovieName("");
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movieName}
        />
        <button type="submit" className={s.button}></button>
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
