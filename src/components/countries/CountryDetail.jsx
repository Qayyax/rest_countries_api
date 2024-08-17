import { useLocation, useParams } from "react-router-dom"

export default function CountryDetail() {
  const { pageID, country } = useParams()
  const location = useLocation()
  const data = location.state?.data
  console.log(location.state?.data)

  if (!data) return (
    <h1 className="flex items-center justify-center m-auto">No Country to display</h1>
  )

  return (
    <div>
      <button>Back</button>
      <div>
        <img
          src={data.flags.png}
          alt={data.flags.alt}
        />
        <div>
          <h1>{data.name}</h1>
          <div>
            <div>
              <p
                className="font-thin"
              >
                <span
                  className="font-semibold"
                >Native Name</span>: {data.nativeName}
              </p>
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
      </div>
    </div>
  )
}
