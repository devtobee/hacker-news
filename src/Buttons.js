import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { handlePage, page, nbPages } = useGlobalContext()
  return (
    <div className='btn-container'>
      <button onClick={() => handlePage('dec')}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage('inc')}>next</button>
    </div>
  )
}
export default Buttons
