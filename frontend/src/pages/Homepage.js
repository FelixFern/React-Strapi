import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useQuery, gql } from '@apollo/client'

import '../styles/home.css'

const REVIEWS = gql`
    query GetReview {
        reviews {
            data {
                attributes {
                    title,
                    body,
                    rating,
                }
            } 
        } 
    }
`

function Homepage() {

    const { loading, error, data } = useQuery(REVIEWS)

    // const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    console.log(data)

    return (
        <div>
            {data.reviews.data.map(review => {
                return(
                    <div key={review.id} className='review-box'>
                        <div className='review-title'>
                            <h1>{review.attributes.title}</h1>
                            <h3>Rating : {review.attributes.rating}</h3>
                        </div>
                        <p>{review.attributes.body}</p>
                        <Link to = {`review/${review.id}`}>Read More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage
