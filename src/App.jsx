import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import { Provider } from "react-redux"
import { store } from "./state/store"

function App() {
  const [category, setCategory] = useState("general")
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <Provider store={store}>
      <div>
        <Navbar onSearch={handleSearch} setCategory={setCategory} />
        <NewsBoard searchTerm={searchTerm} category={category} />
      </div>
    </Provider>
  )
}

export default App