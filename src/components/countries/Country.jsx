import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
import { Link, useParams } from "react-router-dom";

export default function Country({ data }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#2B3844' : '#F2F2F2'
  const { pageID } = useParams()


  return (
    <Link
      to={`/countries/${pageID}/${data.name}`}
      state={{ data }}
    >
      <div
        className="flex flex-col shadow-md  rounded-md "
        style={{
          color: textColor,
          backgroundColor: bgColor,
        }}
      >
        <img
          src={data.flags.png}
          alt={data.flags.alt}
          className="rounded-t-md h-[160px] w-[264px]"
        />
        <div
          className="flex flex-col p-6 pb-12 gap-y-4"
        >
          <h2
            className="font-extrabold max-w-[200px] break-words"
          >{data.name}</h2>
          <div className="max-w-[200px] break-words">
            <p
              className="font-thin"
            >
              <span
                className="font-semibold"
              >Population</span>: {new Intl.NumberFormat("en-US").format(data.population)}
            </p>
            <p
              className="font-thin"
            >
              <span
                className="font-semibold"
              >Region</span>: {data.region}
            </p>
            <p
              className="font-thin"
            >
              <span
                className="font-semibold"
              >Capital</span>: {data.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
