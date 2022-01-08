import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function ReviewDetails() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    console.log(data)
    return (
        <div>
            <h1>{data.data.attributes.title}</h1>
            <h3>Rating : {data.data.attributes.rating}</h3>
            <p>{data.data.attributes.body}</p>
        </div>
    )
}

export default ReviewDetails
