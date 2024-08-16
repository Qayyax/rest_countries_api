import { useOutletContext } from "react-router-dom";
import DisplayCountries from "./DisplayCountries";
import Loading from "../Loading";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../DarkModeContext";

export default function CountryLayout() {
  const { data, loading: initialLoading, error } = useOutletContext();
  const [loading, setLoading] = useState(initialLoading)
  const { isDarkMode } = useContext(DarkModeContext)
  const textColor = isDarkMode ? '#FFFFFF' : '#111517'
  const bgColor = isDarkMode ? '#202C36' : '#F2F2F2'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  // Display the <h1> if there is no data after loading is complete
  if (!loading && (!data || data.length === 0)) {
    return (
      <div className="flex item-center justify-center">
        <h1>Enter a country, or select filter to display countries</h1>
      </div>
    )
  }

  if (error) {
    return <h1>There was an error: {error}</h1>;
  }

  return (
    <>
      <DisplayCountries data={data} />
    </>
  );
}
