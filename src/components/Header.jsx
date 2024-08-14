import { Outlet } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { DarkModeContext } from "./DarkModeContext";
import { useContext } from "react";
import Helmet from 'react-helmet';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#2B3844' : '#FFFFFF'
  return (
    <>
      {/*Helmet used to set body background color*/}
      <Helmet
        bodyAttributes={{
          style: `background-color: ${isDarkMode ? '#202C36' : '#F2F2F2'}`
        }}
      />
      <div
        className={`shadow-lg flex justify-between items-center px-4 py-7  md:px-20 md:py-6`}
        style={{
          color: textColor,
          background: bgColor
        }}
      >
        <span className="text-sm md:text-2xl font-extrabold">Where in the world</span>
        <div
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <IoMoonSharp /> : <MdOutlineDarkMode />}
          <span className="font-semibold text-sm md:text-xl">{isDarkMode ? "Light" : "Dark"} mode</span>
        </div>
      </div>
      <Outlet />
    </>
  )
}
