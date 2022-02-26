import React from 'react'
import { useGlobalContext } from './context'

export default function Stories() {
  const { news, loading, handleClick } = useGlobalContext()
  if (loading) {
    return <div className='loading'></div>
  }
  return (
    <section className='stories'>
      {news.hits.map((item) => {
        const { title, url, num_comments, points, author, objectID } = item
        return (
          <article className='story' key={objectID}>
            <h4>{title}</h4>
            <p className='info'>
              {points} points by
              <span> {author}</span> | {num_comments} comments
            </p>
            <a href={url} className='read-link'>
              Read More
            </a>
            <button
              className='remove-btn'
              onClick={() => handleClick(objectID)}
            >
              remove
            </button>
          </article>
        )
      })}
    </section>
  )
}
