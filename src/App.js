import Stories from './Stories'
import { useGlobalContext } from './context'
import SearchForm from './SearchForm'
import Buttons from './Buttons'

function App() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  )
}

export default App
