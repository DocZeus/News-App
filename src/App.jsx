import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import NewsItem from "./components/NewsItem"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [category, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <NewsItem />
    </div>
  )
}

export default App
