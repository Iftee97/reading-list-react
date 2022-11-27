import { useState } from "react"

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate(title)
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