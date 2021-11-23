import axios from "axios"
import { useEffect, useState } from "react"

function SuperHeroesPage() {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
           {data?.map((item, index) => {
               return <div key={index}>{item.title}</div>
           })}
        </div>
    )
}

export default SuperHeroesPage
