import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const CATEGORY = gql`
    query getCategory($id: ID!) {
        category(id: $id) {
            data {
                attributes {
                    name,
                    reviews {
                        data {
                            atrributes {
                                title,
                                body, 
                                rating,
                                
                            }
                        }
                    }
                }
            }
        }
    }
`

function Category() {
    const { id } = useParams()
    console.log(id)

    const { loading, error, data } = useQuery(CATEGORY, {
        variables: {id: id}
    })
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    console.log(data)
    return (
        <div>
            <p>Category</p>
        </div>
    )
}

export default Category
