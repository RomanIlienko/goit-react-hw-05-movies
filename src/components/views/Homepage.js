import PropTypes from "prop-types";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { FetchTrends } from "services/MoviesApi";


export default function Homepage() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        FetchTrends().then((response) => {
            setTrends(response.id)
            console.log(response.results);
        })
    }, []);
    
    return (
        <>
            <h1>Trending today</h1>
            {trends && trends.map(trend => (
                <li key={trend.id}>
                    <Link
                     to={`/movies/${trend.id}`}>
                     {trend.title}
                    </Link>
                </li>
            )) }
        </>
    )
}
Homepage.propTypes = {
  movies: PropTypes.array.isRequired,
};