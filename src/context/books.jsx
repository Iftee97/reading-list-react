import { createContext } from "react"

export const BooksContext = createContext()

export const BooksContextProvider = ({ children }) => {
  return (
    <BooksContext.Provider value={5}>
      {children}
    </BooksContext.Provider>
  )
}