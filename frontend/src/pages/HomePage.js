// import { useState, useEffect } from "react"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import p1 from '../assets/1.jpeg'
import p2 from '../assets/2.jpeg'
import p3 from '../assets/3.jpeg'
import p4 from '../assets/4.jpeg'
import p5 from '../assets/5.jpeg'
import p6 from '../assets/6.jpeg'
import p7 from '../assets/7.jpeg'
import p8 from '../assets/8.jpeg'
import p9 from '../assets/9.jpeg'
import p10 from '../assets/10.jpeg'
import p11 from '../assets/11.jpeg'
import p12 from '../assets/12.jpeg'
import p13 from '../assets/13.jpeg'
import p14 from '../assets/14.jpeg'
import p15 from '../assets/15.jpeg'
import p16 from '../assets/16.jpeg'
import p17 from '../assets/17.jpeg'
import p18 from '../assets/18.jpeg'
import p19 from '../assets/19.jpeg'
import p20 from '../assets/20.jpeg'
import p21 from '../assets/21.jpeg'
import p22 from '../assets/22.jpeg'
import p23 from '../assets/23.jpeg'
import p24 from '../assets/24.jpeg'
import p25 from '../assets/25.jpeg'


// import ArticleList from '../components/ArticleList/ArticleList.js'
// import articlesAPI from '../api/ArticlesAPI';
// import ArticlesAPI from "../api/ArticlesAPI";


function HomePage(props){
    // class HomePage extends Component {
    //     render() {
    // const raccoon = require("../assets/raccoons_in_trenchcoat.jpg")
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{fontSize: '20px', width: '900px'}}>
                {/* <hr size='10'/><br /> */}
                <h2 style={{textAlign: 'center'}}>Hope.</h2>
                <p>It's what keeps the people of Afghanistan continuing on every day.  Hope for their children to grow up in a safe environment, hope for a better future, hope for life.</p>
                <br />
                <p>After helping the US military for two decades, their hope of a peaceful Afghanistan is now gone, replaced with fear for their own lives.  Not only are these allies facing a harsh reality with Taliban in control, they now have to battle a long, cold winter in an area stricken with famine.</p>
              
                <p>After sacrificing so much, members of the Afghan National Army and their families need our help.  We have an opportunity and an obligation to help them survive through this winter and eventually get them to a safe location.  It starts today, and it starts with you.  </p>
                <br />
                <p>Please consider donating or purchasing from our shop, where 100% of all proceeds will go directly to help our allies in Afghanistan.  Help give them hope for a bright future.</p>
            </div>
            {/* <br /><br /><br /><br /><br /><br /> */}
            <hr />
            <div style={{display: 'flex', flex: 1, resizeMode: 'contain', width: '900px', height: '700px', padding: '80px'}}>
                <Carousel infiniteLoop={true} autoPlay={true} dynamicHeight={false} showThumbs={false}>
                    <div >
                        <img src={p1} alt=''/>
                    </div>
                    <div >
                        <img src={p2} alt=''/>
                    </div>
                    <div >
                        <img src={p3} alt=''/>
                    </div>
                    <div >
                        <img src={p4} alt=''/>
                    </div>
                    <div >
                        <img src={p5} alt=''/>
                    </div>
                    <div >
                        <img src={p6} alt=''/>
                    </div>
                    <div >
                        <img src={p7} alt=''/>
                    </div>
                    <div >
                        <img src={p8} alt=''/>
                    </div>
                    <div >
                        <img src={p9} alt=''/>
                    </div>
                    <div >
                        <img src={p10} alt=''/>
                    </div>
                    <div >
                        <img src={p11} alt=''/>
                    </div>
                    <div >
                        <img src={p12} alt=''/>
                    </div>
                    <div >
                        <img src={p13} alt=''/>
                    </div>
                    <div >
                        <img src={p14} alt=''/>
                    </div>
                    <div >
                        <img src={p15} alt=''/>
                    </div>
                    <div >
                        <img src={p16} alt=''/>
                    </div>
                    <div >
                        <img src={p17} alt=''/>
                    </div>
                    <div >
                        <img src={p18} alt=''/>
                    </div>
                    <div >
                        <img src={p19} alt=''/>
                    </div>
                    <div >
                        <img src={p20} alt=''/>
                    </div>
                    <div >
                        <img src={p21} alt=''/>
                    </div>
                    <div >
                        <img src={p22} alt=''/>
                    </div>
                    <div >
                        <img src={p23} alt=''/>
                    </div>
                    <div >
                        <img src={p24} alt=''/>
                    </div>
                    <div >
                        <img src={p25} alt=''/>
                    </div>
               

                </Carousel>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}
    
export default HomePage;

// function HomePage(props) {
//   // states
//   const [articles, setArticles] = useState([])
//   const [title, setTitle] = useState('')
  
//   // effects
//   useEffect(() => {
//     const getArticles = async () => {
//       let data = await articlesAPI.fetchArticles()
//       if (data) {
//         setArticles(data)
//       }
//     }

//     getArticles()
//   }, [])  //empty brackets will only trigger once on initial render


//   useEffect(() => {
//     if (props.searchQuery) {
//       const getArticles = async () => {
//         let data = await articlesAPI.fetchArticlesByTitle(props.searchQuery)
//         if (data) {
//           setArticles(data)
//         }
//       }
  
//       getArticles()
//     }
//   }, [props.searchQuery]) 

//   // render
//   return (
//     <div>
//       <h2>{ props.searchQuery && `Showing results for "${props.searchQuery}"`}</h2>
//       { 
//         articles 
//           ? <ArticleList articles={articles} />
//           : <span>404: Error retrieving articles.</span>
//       }
//     </div>
//   )
// }


