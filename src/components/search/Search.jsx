import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { DarkModeContext } from "../DarkModeContext";

export default function Search({onSendData}) {
  const [country, setCountry] = useState("")
  const {isDarkMode} = useContext(DarkModeContext)

  function handleInput(e) {
    setCountry(e.target.value)
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      onSendData(country)
    }
  }

  return (
    <div>
      <FaSearch />
      <input 
        type="text"
        onChange={handleInput}
        onKeyDown={handleEnter}
        placeholder="Search for a country..." 
      />
    </div>
  )
}
