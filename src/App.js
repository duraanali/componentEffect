import React from 'react'
import './App.css';
import { Container } from 'reactstrap';
import MovieList from './components/MovieList';

function App() {

  let logo = "https://bit.ly/31ShkO1"

  return (
   <Container>
    <img className="logo" src={logo} alt="logo" />
     <MovieList />
   </Container>
  );
}

export default App;
