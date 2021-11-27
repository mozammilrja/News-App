import  axios from 'axios'

const API_KEY = "https://newsapi.org/v2/everything?q=tesla&from=2021-10-27&sortBy=publishedAt&apiKey=34937d0d886d48268790767d822382b1"

export const NewsHeading = () =>{
    axios.get(API_KEY)
    .then((response) =>{
        console.log(response.data.articles);
    })
}