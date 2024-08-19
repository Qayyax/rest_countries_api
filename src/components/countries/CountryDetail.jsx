import { useLocation, Link, useNavigate } from "react-router-dom"
import { DarkModeContext } from '../DarkModeContext';
import { useContext } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md"

export default function CountryDetail() {
  const location = useLocation()
  const data = location.state?.data
  const borders = location.state?.borderData
  const pageID = location.state.pageID
  const navigate = useNavigate()

  const { isDarkMode } = useContext(DarkModeContext);

  const textColor = isDarkMode ? '#FFFFFF' : '#111517';
  const bgColor = isDarkMode ? '#2B3844' : '#FFFFFF';
  if (!data) return (
    <h1 className="flex items-center justify-center m-auto">No Country to display</h1>
  )

  function formatText(title, detail) {
    return (
      <p
        className="font-thin"
      >
        <span
          className="font-semibold"
        >{title}</span>: {detail}
      </p>

    )
  }

  function borderBotton(countryData, index) {
    // change button to Link
    // /countries/:pageID/:country
    // to={`/countries/${pageID}/${countryData.name}`}
    return (
      <button
        className="min-w-[96px] py-1.5 px-4 rounded-md shadow-md font-light"
        style={{
          background: bgColor
        }}
        key={index}
      >
        {countryData.name}
      </button>
    )
  }

  // {formatText("Currencies", data.currencies)}
  // {formatText("Languages", data.languages)}

  return (
    <div className="flex flex-col px-14 items-center lg:items-start lg:px-20">
      <div
        className="flex flex-col pt-10 pb-16 gap-16 items-start justify-start lg:gap-20 lg:justify-between w-full"
        style={{
          color: textColor
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center gap-x-2 py-1.5 px-6 rounded-md shadow-md w-fit"
          style={{
            color: textColor,
            background: bgColor
          }}
        >
          <span><MdOutlineKeyboardBackspace /></span>
          Back
        </button>
        <div
          className="flex flex-col gap-y-11 lg:flex-row lg:justify-between 
           lg:gap-x-36 w-full lg:items-center"
        >
          <img
            src={data.flags.png}
            alt={data.flags.alt}
            className="rounded-md w-full max-w-[320px] max-h-[229px] shadow-md lg:max-w-[560px] lg:max-h-[401px]"
          />
          <div
            className="w-full"
          >
            <h1
              className="font-extrabold mb-4"
            >
              {data.name}
            </h1>
            <div
              className="flex flex-col gap-y-8 mb-8 lg:flex-row lg:gap-x-28"
            >
              <div
                className="flex flex-col gap-y-2 w-full"
              >
                {formatText("Native Name", data.nativeName)}
                {formatText("Population", new Intl.NumberFormat("en-US").format(data.population))}
                {formatText("Region", data.region)}
                {formatText("Sub Region", data.subRegion)}
                {formatText("Capital", data.capital)}
              </div>
              <div
                className="flex flex-col gap-y-2 w-full"
              >
                {formatText("Top Level Domain", data.tld)}
                {formatText("Currencies", data.currency)}
                {formatText("Languages", data.languages)}
              </div>
            </div>
            <div
              className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-4"
            >
              <h2
                className="font-bold"
              >
                Border Countries:
              </h2>
              <div
                className="flex gap-x-2.5"
              >
                {/*Function that shows the button*/
                  // change border countries in search data to fetch the countryies ahead of time.
                  borders.map((item, index) => {
                    console.log(item)
                    return borderBotton(...item, index)
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
