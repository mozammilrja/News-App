import React from 'react'
import {NewsContextProvider} from './Api/NewsContext'
import NewsCards from './componets/News/NewsCards'
import './App.css'

const App = () => {

    return (
        <NewsContextProvider>
        <NewsCards />
      </NewsContextProvider>
    )
}

export default App
