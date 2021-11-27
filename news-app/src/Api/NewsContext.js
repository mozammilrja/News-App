import React,{useEffect,useState,createContext} from 'react'
import axios from 'axios'
export const NewsContext = createContext();

const API_KEY = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=34937d0d886d48268790767d822382b1"

export const NewsContextProvider = (props) => {
    const [data,setData] = useState ()

    useEffect (() => {

        axios.get(API_KEY)
        .then((response) =>setData(response.data))
        .catch((error) =>{
            console.log(error);
        })
      
    },[])

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}


