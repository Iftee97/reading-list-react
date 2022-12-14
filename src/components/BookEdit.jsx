import { useState } from "react"

export default function BookEdit({ book, editBook, closeEdit }) {
  const [title, setTitle] = useState(book.title)

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