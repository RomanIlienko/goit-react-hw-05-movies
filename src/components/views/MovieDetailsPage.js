import { GetMovieDetails } from "services/MoviesApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"




export default function MovieDetailsPage() {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState(null)

    useEffect(() => {
        GetMovieDetails(movieId).then(setMovieDetails)
    }, [movieId]);
    console.log(movieDetails);

    return (
        <>
            {movieDetails &&
                <>
                 <img alt={movieDetails.title} />
                 <h2>{movieDetails.title}</h2>
                 <p>User score: {movieDetails.vote_average}</p>
                </>
            }
        </>
    )
}

