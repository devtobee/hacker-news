import React from 'react'
import { useContext, useState, useEffect, useReducer } from 'react'
import reducer from './reducer'
const AppContext = React.createContext()

const initialState = {
  hits: [],
  loading: false,
  query: 'react',
  page: 0,
  nbPages: 0,
}

const AppProvider = ({ children }) => {
  // const [news, setNews] = useState({})
  // const [loading, setLoading] = useState(true)
  // const [query, setQuery] = useState('react')
  // const [page, setPage] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`

  const getUsers = async () => {
    try {
      dispatch({ type: 'SET_LOADING' })
      const resp = await fetch(url)
      const data = await resp.json()
      dispatch({
        type: 'SET_STORIES',
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
      dispatch({ type: 'SET_LOADING_OFF' })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [state.page, state.query])

  const handleChange = (e) => {
    dispatch({ type: 'SET_QUERY', payload: e.target.value })
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const handlePage = (arg) => {
    if (arg === 'inc') {
      dispatch({ type: 'NEXT_PAGE' })
    }
    if (arg === 'dec') {
      dispatch({ type: 'PREV_PAGE' })
    }
  }
  // const prevPage = () => {
  //   dispatch({ type: 'PREV_PAGE' })
  // }
  // const nextPage = () => {
  //   dispatch({ type: 'NEXT_PAGE' })
  // }
  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePage,
        removeItem,
        handleChange,
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
