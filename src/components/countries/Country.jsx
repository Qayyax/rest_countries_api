import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function Country({ data }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#2B3844' : '#F2F2F2'

  return (
    <div
      className="flex flex-col shadow-md"
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      <img src={data.flags.png} alt={data.flags.alt} />
      <div>
        <h2>{data.name}</h2>
        <div>
          <p><span>Population</span>: {data.population}</p>
          <p><span>Region</span>: {data.region}</p>
          <p><span>Capital</span>: {data.capital}</p>
        </div>
      </div>
    </div>
  )
}
