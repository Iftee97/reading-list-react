import { useContext } from "react"
import { BooksContext } from "../context/BooksContext"
import BookShow from "./BookShow"

export default function BookList() {
  const { books } = useContext(BooksContext)

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow book={book} key={book.id} />
      ))}
    </div>
  )
}