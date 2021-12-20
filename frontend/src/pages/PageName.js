import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
// import articlesAPI from "../api/ArticlesAPI"
// import ArticleList from "../components/ArticleList/ArticleList.js"


function PageName(props) {
//states
// const [articles, setArticles] = useState([])

//params
const {pageName} = useParams()
  
  // effects
//   useEffect(() => {
//     if (!props.searchQuery) {
//         const getArticles = async () => {
//           console.log(sectionName)
//           try {
//           let data = await articlesAPI.fetchArticlesBySection(sectionName)  //we need to pass a section value
//         //   console.log("***********")
//           if (data) {
//             setArticles(data)
//           }
//         }
//             catch (err) {
//                 console.log(err)
//             }
//         }

//       getArticles()
//     } else {
//       const getArticlesByTitleAndSection = async () => {
//         let data = await articlesAPI.fetchArticlesByTitleAndSection(props.searchQuery, sectionName)
//         if (data) {
//           setArticles(data)
//         }
//       }
  
//       getArticlesByTitleAndSection()
//     }
    
//   }, [sectionName, props.searchQuery])


  // render
  return (
      <div>
      <h1>PageName, do i need it?</h1>
    </div>
  )
    }


export default PageName;