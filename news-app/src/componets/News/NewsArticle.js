import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const NewsArticle = ({data}) => {
    return (
        <div className="news">
        <h1 className="news__title">{data.title}</h1>
        <p className="news__desc">{data.description}</p>
        <span className="news__author">{data.author}</span> <br />
        <span className="news__published">{data.publishedAt}</span>
        <span className="news__source">{data.source.name}</span>
      </div>
    )
}

export default NewsArticle
