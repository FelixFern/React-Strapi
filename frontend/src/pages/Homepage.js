import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import '../styles/home.css'

function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    
    console.log(data)
    return (
        <div>
            {data.data.map(review => {
                return(
                    <div key={review.id} className='review-box'>
                        <div className='review-title'>
                            <h1>{review.attributes.title}</h1>
                            <h3>Rating : {review.attributes.rating}</h3>
                        </div>
                        <p>{review.attributes.body}</p>
                        <Link to = {`details/${review.id}`}>Read More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage
