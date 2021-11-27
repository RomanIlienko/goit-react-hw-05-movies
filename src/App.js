import { Switch, Route } from 'react-router-dom'


import Homepage from 'components/views/Homepage';
import Cast from 'components/views/Cast';
import MovieDetailsPage from 'components/views/MovieDetailsPage';
import Reviews from 'components/views/Reviews';
import MoviesPage from 'components/views/MoviesPage';
import AppBar from 'components/AppBar/AppBar';
import NotFoundView from 'components/views/NotFoundView';

import Container from 'components/Container';
import './App.css';


export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path='/' exact>
          <Homepage />
          
        </Route>

        <Route path='/movies'>
          <MoviesPage />
        </Route>

        <Route >
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  )
}
