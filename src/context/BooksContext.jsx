import { createContext, useState } from "react"
import axios from "axios"

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const { data } = await axios.get('http://localhost:3001/books')
    setBooks(data)
  }

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

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBook,
    editBook
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}