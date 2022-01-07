import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
                setLoading(false)
            } catch(err) {
                setError(err)
                setLoading(true)
            }
        }
        fetchData()
    }, [url])
    return { loading, error, data }

}

export default useFetch