import React from 'react'
import { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('react')
  const [page, setPage] = useState(1)
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`

  const getUsers = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setNews(data.hits)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const removeItem = (id) => {
    const newNews = news.filter((item) => item.objectID !== id)
    setNews(newNews)
  }

  const prevPage = () => {
    setPage((prev) => prev - 1)
  }
  const nextPage = () => {
    setPage((prev) => prev + 1)
  }
  return (
    <AppContext.Provider
      value={{
        prevPage,
        nextPage,
        removeItem,
        handleChange,
        query,
        news,
        loading,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
