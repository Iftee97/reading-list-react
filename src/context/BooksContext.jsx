import { createContext, useState } from "react"

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1)
    }
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}