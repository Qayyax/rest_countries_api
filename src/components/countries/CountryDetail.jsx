import { useLocation, useParams } from "react-router-dom"

export default function CountryDetail() {
  const { pageID, country } = useParams()
  const location = useLocation()
  const data = location.state?.data
  console.log(data)
  console.log(Object.values(data.languages))

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

  function borderBotton(countryData) {
    // change button to Link
    return (
      <button
        className="p-4 border border-black"
      >
        {countryData}
      </button>
    )
  }

  // {formatText("Currencies", data.currencies)}
  // {formatText("Languages", data.languages)}

  return (
    <div>
      <button
        className="p-2 border border-black"
      >Back</button>
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
                data.borderCountries.map(item => borderBotton(item))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
