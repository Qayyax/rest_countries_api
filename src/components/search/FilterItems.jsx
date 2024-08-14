import { DarkModeContext } from "../DarkModeContext"
import { useContext } from "react"

export default function FilterItems({ onClick, children }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const hoverBg = isDarkMode ? "hover:bg-[#202C36]" : "hover:bg-[#F2F2F2]"
  return (
    <div
      className={`${hoverBg} cursor-pointer hover:rounded-md hover:w-full hover:px-1`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
