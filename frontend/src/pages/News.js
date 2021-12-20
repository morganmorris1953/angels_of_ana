import { useState, useEffect} from 'react'
import React from 'react'
// import { useParams }  from "react-router-dom"



function News(props) {
    const [articles, setArticles] = useState([])
    // const params = useParams()
    useEffect(() => {
        const getNews = async () => {
             //get data from API
            const data = await fetch('https://newsapi.org/v2/everything?q=afghanistan&apiKey=784fb075748c40ccbc65f29fe3243a33').then((resp) => resp.json()).then((data) => setArticles(data.articles))
        }
        getNews()
    }, [])

    //render helper
    const renderArticles = () => { 
        let elems = articles.map((article, index) => {
        return (
            <li key={index}>
                {/* links to outside articles */}
                <a href={article.url}>{article.title}</a>
            </li>
        )
        })

        return elems
    }




    return (
    <div>
        <h1>Afghanistan News</h1>
            {renderArticles()}
    </div>
)
}


export default News;
