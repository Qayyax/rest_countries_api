import { FaAngleDown, FaChevronUp } from "react-icons/fa6";
import { DarkModeContext } from "../DarkModeContext";
import { useContext } from "react";

export default function Filter({ onClick, isClicked }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "#2B3844" : "#FFFFFF"
  return (
    <div>
      <div
        onClick={onClick}
        className={`flex items-center justify-between 
pl-6 pr-5 py-4 min-w-[200px] shadow-lg cursor-pointer rounded-md
`}
        style={{
          background: bgColor
        }}
      >
        <span>Filter by Region</span>
        {isClicked ? <FaChevronUp /> : <FaAngleDown />}
      </div>
    </div>
  )
}
