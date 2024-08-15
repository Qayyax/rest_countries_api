import { useParams, useOutletContext } from "react-router-dom";
import DisplayCountries from "./DisplayCountries";

export default function CountryLayout() {
  // const { pageID } = useParams();
  const { data, loading, error } = useOutletContext();

  if (loading) {
    return <h1>Loading...</h1>;
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
