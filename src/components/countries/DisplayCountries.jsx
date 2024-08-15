import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Country from "./Country";

export default function DisplayCountries({ data }) {
  const navigate = useNavigate()
  const { pageID } = useParams()
  const itemsPerPage = 8
  const totalPages = Math.ceil(data.length / itemsPerPage)

  // max makes it return 1 at least
  // Min makes it with the total number of pages possible
  const currentPage = Math.min(Math.max(parseInt(pageID, 10) || 1, 1), totalPages)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const countriesToDisplay = data.slice(startIndex, endIndex)

  useEffect(() => {
    if (data.length < 8) {
      navigate('1', { replace: true })
    }
  }, [data.length, navigate])

  function handlePageChange(newPage) {
    navigate(`${newPage}`)
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
