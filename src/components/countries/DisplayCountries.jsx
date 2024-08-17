import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Country from "./Country";
import { DarkModeContext } from "../DarkModeContext";


export default function DisplayCountries({ data }) {
  const { pageID } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const { isDarkMode } = useContext(DarkModeContext)
  const navigate = useNavigate()

  useEffect(() => {
    const pageNumber = parseInt(pageID, 10);
    if (!isNaN(pageNumber)) {
      setCurrentPage(pageNumber);
    } else {
      setCurrentPage(1);
    }
  }, [pageID]);

  const itemsPerPage = 8
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const countriesToDisplay = data.slice(startIndex, endIndex)

  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#2B3844' : '#F2F2F2'



  function handlePageChange(newPage) {
    setCurrentPage(newPage)
    navigate(`/countries/${newPage}`, { replace: true })
  }

  return (
    <div
      className="relative"
    >
      <div
        className={`flex flex-col items-center justify-center gap-y-10 
md:flex-row md:px-20 md:flex-wrap md:gap-20 
`}
      >
        {countriesToDisplay.map((item, index) => (
          <Country key={index} data={item} />
        ))}

      </div>

      <div
      >
        {/*Hover state is left on the buttons*/}
        <div
          className="flex justify-around w-full mt-4 px-4 pb-3"
        >
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`p-2 rounded-md cursor-pointer border shadow-md`}
              style={{
                color: textColor,
                backgroundColor: bgColor
              }}
            >
              Previous
            </button>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`p-2 rounded-md cursor-pointer border shadow-md`}
              style={{
                color: textColor,
                backgroundColor: bgColor
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )

}
