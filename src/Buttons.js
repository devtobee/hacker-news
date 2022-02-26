import React from 'react'
import { useGlobalContext } from './context'
const Buttons = () => {
  const { nextPage, prevPage, page } = useGlobalContext()
  return (
    <div className='btn-container'>
      <button onClick={prevPage}>prev</button>
      <p>{page} of 50 </p>
      <button onClick={nextPage}>next</button>
    </div>
  )
}
export default Buttons
