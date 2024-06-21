import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

function App() {
  const [category, setCategory] = useState("general")
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} setCategory={setCategory} />
      <NewsBoard searchTerm={searchTerm} category={category} />
    </div>
  )
}

export default App