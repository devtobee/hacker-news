import React from 'react'
import SearchForm from './SearchForm'
import Buttons from './Buttons'
import Stories from './Stories'
import { FiSun, FiSunset } from 'react-icons/fi'
const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}
function App() {
  const [theme, setTheme] = React.useState('light-theme')

  React.useEffect(() => {
    document.documentElement.classList = theme
  }, [theme])
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
      <div className='btn-container'>
        <button onClick={() => setTheme(toggleTheme)}>
          {theme === 'light-theme' ? <FiSun /> : <FiSunset />}
        </button>
      </div>
    </>
  )
}

export default App
