import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"
import BookShow from "./BookShow"

export default function BookList({ books, deleteBook, editBook }) {
  const { count, incrementCount } = useContext(BooksContext)

  return (
    <div className="book-list">
      <div>
        count: {count} <br />
        <button onClick={incrementCount}>add 1</button>
      </div>
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