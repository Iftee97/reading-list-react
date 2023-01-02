import { useState, useEffect } from "react"
import axios from "axios"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

export default function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3001/books')
      setBooks(data)
    }
    fetchData()
  }, [])

  const createBook = async (title) => {
    if (!title) return
    const { data } = await axios.post('http://localhost:3001/books', {
      title
    })
    setBooks([...books, data])
  }

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    setBooks(books.filter((book) => book.id !== id))
  }

  const editBook = async (id, title) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title
    })
    setBooks(books.map((book) => (book.id === id ? data : book)))
  }

  return (
    <div className="app">
      <h1>Reading List App</h1>
      <BookList
        books={books}
        deleteBook={deleteBook}
        editBook={editBook}
      />
      <BookCreate onCreate={createBook} />
    </div>
  )
}