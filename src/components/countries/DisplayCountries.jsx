import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Country from "./Country";

export default function DisplayCountries({ data }) {
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const itemsPerPage = 8
  const totalPages = Math.ceil(data.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const countriesToDisplay = data.slice(startIndex, endIndex)


  function handlePageChange(newPage) {
    setCurrentPage(newPage)
    navigate(`/countries/${currentPage}`, { replace: true })
  }

  return (
    <>
      {countriesToDisplay.map((item, index) => (
        <Country key={index} data={item} />
      ))}

      <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}

        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </>
  )

}
