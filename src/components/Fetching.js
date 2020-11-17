import {useEffect, useState} from "react"
import axios from "axios"

export default function Fetching (){

    const [articles, setArticles] = useState()

    useEffect(() => {
        async function fetchData () {
         const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
         console.log("response", response.data)
         setArticles(response.data)
        }
        fetchData()
    }, [])

    console.log("articles", articles)

    return <div>
        {!articles ? <h1>Loading</h1> : articles.map(article => {
            return <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
            </div>
        })}
    </div>
}