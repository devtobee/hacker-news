import React from 'react'
import { useGlobalContext } from './context'

export default function SearchForm() {
  const { query, handleChange } = useGlobalContext()
  return (
    <div className='container'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <h2>Search Hacken Hacker</h2>
        <input
          type='text'
          className='form-input'
          placeholder='REACT'
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
