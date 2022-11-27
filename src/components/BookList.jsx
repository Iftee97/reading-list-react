import BookShow from "./BookShow"

export default function BookList({ books, deleteBook, editBook }) {
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