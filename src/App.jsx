import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

export default function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    console.log(`Book title: ${title}`)
    setBooks([
      ...books,
      {
        id: Date.now(),
        title
      }
    ])
  }

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  const editBook = (id, title) => {
    setBooks(books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title
        }
      }
      return book
    }))
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

// https://state-updates.vercel.app/