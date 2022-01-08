import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
// import useFetch from '../hooks/useFetch'

import '../styles/home.css'

const REVIEWS = gql`
    query GetReviews {
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
    const review_list = data.reviews.data 
    console.log(review_list)
    return (
        <div>
            {review_list.map(review => {
                const review_id = review_list.indexOf(review) + 1
                return(
                    <div key={review_id} className='review-box'>
                        <div className='review-title'>
                            <h1>{review.attributes.title}</h1>
                            <h3>Rating : {review.attributes.rating}</h3>
                        </div>
                        <p>{review.attributes.body}</p>
                        <Link to = {`review/${review_id}`}>Read More</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage
