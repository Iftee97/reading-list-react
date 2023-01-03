import { useEffect } from "react"
import { useBooksContext } from "./hooks/useBooksContext"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

export default function App() {
  const { fetchBooks } = useBooksContext()

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