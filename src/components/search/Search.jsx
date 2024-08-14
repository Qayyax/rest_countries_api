import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { DarkModeContext } from "../DarkModeContext";

export default function Search({ onSendData }) {
  const [country, setCountry] = useState("")
  const { isDarkMode } = useContext(DarkModeContext)

  const bgColor = isDarkMode ? "#2B3844" : "#FFFFFF"
  const searchBar = isDarkMode ? 'bg-[#2B3844] text-white placeholder-white' : 'bg-white text-gray-800 placeholder-gray-600'

  function handleInput(e) {
    setCountry(e.target.value)
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      onSendData(country)
    }
  }

  return (
    <div
      className={`flex items-center gap-x-6 w-full rounded-md py-4 px-8 shadow-md 
md:max-w-[480px]
`}
      style={{
        background: bgColor
      }}

    >
      <FaSearch />
      <input
        type="text"
        onChange={handleInput}
        onKeyDown={handleEnter}
        placeholder="Search for a country..."
        className={`w-full border-none outline-none ${searchBar}`}
      />
    </div>
  )
}
