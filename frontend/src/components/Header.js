import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from "@apollo/client"

const CATEGORIES = gql`
    query getCategories {
        categories {
            data {
                attributes {
                    name
                }
            }
        }
    }
`

function Header() {
    const { loading, error, data } = useQuery(CATEGORIES)


    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    const category_list = data.categories.data 

    console.log(category_list)
    return (
        <div className='site-header'>
            <Link to="/"><h1>Review Bois</h1></Link>
            <nav className='categories'>
                <span>Filter Reviews by Category : </span>
                {category_list.map(category => {
                    const category_id = category_list.indexOf(category) + 1
                    console.log(category.attributes.name)
                    return (
                        <Link key={category_id} to={`/category/${category_id}`} className='category-link'>
                            {category.attributes.name}
                        </Link>
                    )
                })}

            </nav>
        </div>
    )
}

export default Header
