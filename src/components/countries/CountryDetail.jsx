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
  const bgColor = isDarkMode ? '#202C36' : '#FFFFFF';
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
        className="p-4 border border-black"
        key={index}
      >
        {countryData.name}
      </button>
    )
  }

  // {formatText("Currencies", data.currencies)}
  // {formatText("Languages", data.languages)}

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col pt-10 gap-16 items-start"
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
        <div>
          <img
            src={data.flags.png}
            alt={data.flags.alt}
          />
          <div>
            <h1>{data.name}</h1>
            <div>
              <div>
                {formatText("Native Name", data.nativeName)}
                {formatText("Population", new Intl.NumberFormat("en-US").format(data.population))}
                {formatText("Region", data.region)}
                {formatText("Sub Region", data.subRegion)}
                {formatText("Capital", data.capital)}
              </div>
              <div>
                {formatText("Top Level Domain", data.tld)}
                {formatText("Currencies", data.currency)}
                {formatText("Languages", data.languages)}
              </div>
            </div>
            <div>
              <h2>Border Countries:</h2>
              <div>
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
