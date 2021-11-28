
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { FetchTrends } from "services/MoviesApi";
import s from './Views.module.css'


export default function Homepage() {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        FetchTrends().then((response) => {
            setTrends(response.results)
        })
    }, []);
    
    return (
        <>
            <h1 className={s.title}>Trending today</h1>
            <ul>
                {trends && trends.map(trend => (
                <li key={trend.id}>
                    <Link className={s.link}
                     to={`/movies/${trend.id}`}>
                     {trend.title}
                    </Link>
                </li>
            )) }
            </ul>
        </>
    )
}
