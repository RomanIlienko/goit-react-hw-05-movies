import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
// import Appbar from "./Components/AppBar/AppBar";
import Container from "./Components/Container";
import Navigation from "./Components/Navigation";
import Spinner from "./Components/Loader/Loader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "home-page" */)
);
const MovieDetails = lazy(() =>
  import("./views/MovieDetails" /* webpackChunkName: "home-page-details" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "home-page" */)
);

function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
