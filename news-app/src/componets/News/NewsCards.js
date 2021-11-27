import React,{useContext} from 'react'
import {NewsContext} from '../../Api/NewsContext'
import NewsArticle from './NewsArticle'


const NewsCards = (props) => {
    const { data } = useContext(NewsContext)
    console.log(data);
    return (
        <div className="all_news">
            {data ? data.articles.map(news => <NewsArticle data={news} key={news.url} />) :'loading'}
        </div>
    )
}

export default NewsCards
