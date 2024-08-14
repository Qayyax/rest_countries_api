import { useState, createContext } from "react"

export const DarkModeContext = createContext()

export default function DarkModeProvider({children}) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode(prev => !prev)
  }

  return (
  <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
      {children}
  </DarkModeContext.Provider>
  )
}
