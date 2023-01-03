import { useState, useContext } from "react"
import { BooksContext } from "../context/BooksContext"

export default function BookEdit({ book, closeEdit }) {
  const [title, setTitle] = useState(book.title)
  const { editBook } = useContext(BooksContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    editBook(book.id, title)
    closeEdit()
  }

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <button className="button is-primary">save</button>
      </form>
    </div>
  )
}