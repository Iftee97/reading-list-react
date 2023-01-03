import { useEffect, useContext } from "react"
import { BooksContext } from "./context/BooksContext"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

export default function App() {
  const { fetchBooks } = useContext(BooksContext)

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="app">
      <h1>Reading List App</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}