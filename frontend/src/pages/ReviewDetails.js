import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client"
// import useFetch from '../hooks/useFetch'

const REVIEW = gql`
    query getReview($id: ID!) {
        review(id: $id) {
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

function ReviewDetails() {
    const { id } = useParams()
    // const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)
    const { loading, error, data } = useQuery(REVIEW, {
        variables: {id: id}
    })
    
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    const review_data = data.review.data
    return (
        <div>
            <h1>{review_data.attributes.title}</h1>
            <h3>Rating : {review_data.attributes.rating}</h3>
            <p>{review_data.attributes.body}</p>
        </div>
    )
}

export default ReviewDetails
