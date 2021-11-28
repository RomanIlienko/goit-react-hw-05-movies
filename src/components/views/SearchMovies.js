import { useState, useEffect } from "react"
import { FetchOnSearchQuery } from "services/MoviesApi";
import Container from "components/Container";


export default function SearchMovie() {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        FetchOnSearchQuery().then(setMovies)
    }, []);

    return (
        <>
            <h1 text='Movies'>mvs</h1>
        </>
    )
}