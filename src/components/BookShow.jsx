import { useState } from "react"
import { useBooksContext } from "../hooks/useBooksContext"
import BookEdit from "./BookEdit"

export default function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteBook } = useBooksContext()

  const closeEdit = () => {
    setShowEdit(false)
  }

  return (
    <div className="book-show">
      <div>
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        {showEdit
          ? <BookEdit book={book} closeEdit={closeEdit} />
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