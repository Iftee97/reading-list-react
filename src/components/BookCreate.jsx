import { useState } from "react"
import { useBooksContext } from "../hooks/useBooksContext"

export default function BookCreate() {
  const [title, setTitle] = useState("")
  const { createBook } = useBooksContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    createBook(title)
    setTitle("")
  }

  return (
    <div className="book-create">
      <h3>add a book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">submit</button>
      </form>
    </div>
  )
}