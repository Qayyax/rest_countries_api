import Search from "./Search"
import Filter from "./Filter"
import FilterItems from "./FilterItems"
import { useEffect, useState, useContext } from "react"
import { DarkModeContext } from "../DarkModeContext"

export default function SearchLayout() {
  const [filtered, setFiltered] = useState(false)
  const [country, setCountry] = useState("")
  const [region, setRegion] = useState("")

  const { isDarkMode } = useContext(DarkModeContext)

  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#202C36' : '#F2F2F2'

  useEffect(() => {
    fetch()
  }, [])

  // reads back the country inputted by the user
  function handleData(data) {
    setCountry(data)
  }

  // toggle the filter state
  function toggleFilter() {
    setFiltered(prev => !prev)
  }

  // used to set the filtered region selected
  function handleRegion(item) {
    setRegion(item)
    toggleFilter()
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
      <Search onSendData={handleData} />

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
