import Search from "./Search"
import Filter from "./Filter"
import FilterItems from "./FilterItems"
import { useEffect, useState, useContext } from "react"
import { DarkModeContext } from "../DarkModeContext"

export default function SearchLayout() {
  const [filtered, setFiltered] = useState(false)
  const [fullURL, setFullURL] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { isDarkMode } = useContext(DarkModeContext)

  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#202C36' : '#F2F2F2'

  const baseUrl = "https://restcountries.com/v3.1/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fullURL)
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }
        let postData = await response.json()
        setData(handleData(postData))
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    if (fullURL) {
      fetchData()
    }
  }, [fullURL])

  console.log(data)

  // reads back the country inputted by the user
  function handleCountryData(data) {
    // setCountry(data)
    let fullUrl = handleURL("name", data.toLowerCase())
    setFullURL(fullUrl)
  }

  // toggle the filter state
  function toggleFilter() {
    setFiltered(prev => !prev)
  }

  // used to set the filtered region selected
  function handleRegion(item) {
    // setRegion(item)
    toggleFilter()
    let fullUrl = handleURL("region", item.toLowerCase())
    setFullURL(fullUrl)
  }

  // function to get fullURL
  function handleURL(type, name) {
    return baseUrl + type + "/" + name
  }

  // Function to handle data returned
  function handleData(data) {
    const parsedData = data.map(item => {
      return {
        name: item.name?.common || "nill",
        capital: item.capital?.[0] || "nill",
        region: item.region || "nill",
        population: item.population || "nill",
        flags: {
          png: item.flags?.png || "nill",
          alt: item.flags?.alt || "nill"
        }
      }
    })
    return parsedData
  }


  const filterCountries = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  return (
    <div
      className={`flex flex-col gap-y-10 items-start px-4 py-6  md:px-20 md:py-12
md:flex-row md:justify-between md:gap-x-2 
`}
      style={{
        color: textColor,
        background: bgColor
      }}
    >
      <Search onSendData={handleCountryData} />

      <div className="relative">

        <Filter onClick={toggleFilter} isClicked={filtered} />

        {filtered && (
          <div
            className={`absolute top-full left-0 mt-2 w-full
rounded-md py-4 px-6 flex flex-col gap-y-2
`}
            style={{
              background: isDarkMode ? "#2B3844" : "#FFFFFF"
            }}
          >
            {filterCountries.map(item => (
              <FilterItems
                onClick={() => handleRegion(item)}
                key={item}
              >
                {item}
              </FilterItems>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
