import { useBooksContext } from "../hooks/useBooksContext"
import BookShow from "./BookShow"

export default function BookList() {
  const { books } = useBooksContext()

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookShow book={book} key={book.id} />
      ))}
    </div>
  )
}