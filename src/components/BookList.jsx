import { useContext } from "react"
import { BooksContext } from "../context/books"
import BookShow from "./BookShow"

export default function BookList({ books, deleteBook, editBook }) {
  const value = useContext(BooksContext)
  console.log('context value:', value)

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow
          book={book}
          key={book.id}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      ))}
    </div>
  )
}