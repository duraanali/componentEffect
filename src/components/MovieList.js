import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import { Row } from 'reactstrap'

export default function MovieList() {
    const [movies, setMovies] = useState([])

    
    useEffect(() => {

        axios.get("https://ghibliapi.herokuapp.com/films")
         .then((res) => {
           setMovies(res.data)
        })
         .catch((err) => {
            console.log(err)
        })

    }, [])


    return (
        <Row>
            <h2>Movie List</h2>
            {movies.map(function(movie) {
                return <MovieCard film={movie} />
            })}
        </Row>
    )
}
