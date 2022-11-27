import { useState } from "react"
import BookEdit from "./BookEdit"

export default function BookShow({ book, deleteBook, editBook }) {
  const [showEdit, setShowEdit] = useState(false)

  const closeEdit = () => {
    setShowEdit(false)
  }

  return (
    <div className="book-show">
      <div>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        {showEdit
          ? <BookEdit book={book} editBook={editBook} closeEdit={closeEdit} />
          : <h3>{book.title}</h3>}
      </div>
      <div className="actions">
        <button onClick={() => setShowEdit(!showEdit)} className="edit">
          edit
        </button>
        <button onClick={() => deleteBook(book.id)} className="delete">
          delete
        </button>
      </div>
    </div >
  )
}