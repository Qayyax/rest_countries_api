import Search from './Search';
import Filter from './Filter';
import FilterItems from './FilterItems';
import { useEffect, useState, useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';
import { useNavigate, Outlet } from 'react-router-dom';

export default function SearchLayout() {
  const [filtered, setFiltered] = useState(false);
  const [fullURL, setFullURL] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { isDarkMode } = useContext(DarkModeContext);

  const textColor = isDarkMode ? '#FFFFFF' : '#111517';
  const bgColor = isDarkMode ? '#202C36' : '#F2F2F2';

  const baseUrl = 'https://restcountries.com/v3.1/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fullURL);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postData = await response.json();
        setData(handleData(postData));
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    if (fullURL) {
      fetchData();
    }
  }, [fullURL]);


  // reads back the country inputted by the user
  function handleCountryData(name) {
    let fullUrl = handleURL('name', name.toLowerCase());
    setFullURL(fullUrl);
    navigate('/countries/1');
  }

  // toggle the filter state
  function toggleFilter() {
    setFiltered((prev) => !prev);
  }

  // used to set the filtered region selected
  function handleRegion(item) {
    toggleFilter();
    let fullUrl = handleURL('region', item.toLowerCase());
    setFullURL(fullUrl);
    navigate('/countries/1');
  }

  // function to get fullURL
  function handleURL(type, name) {
    return baseUrl + type + '/' + name;
  }

  console.log("This now", fullURL)

  // Regions to filter.
  const filterCountries = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  return (
    <>
      <div
        className={`flex flex-col gap-y-10 items-start px-4 py-6  md:px-20 md:py-12
md:flex-row md:justify-between md:gap-x-2 
`}
        style={{
          color: textColor,
          background: bgColor,
        }}
      >
        <Search onSendData={handleCountryData} />

        <div className="relative">
          <Filter onClick={toggleFilter} isClicked={filtered} />

          {filtered && (
            <div
              className={`absolute top-full left-0 mt-2 w-full
rounded-md py-4 px-6 flex flex-col gap-y-2 shadow-md z-20
`}
              style={{
                background: isDarkMode ? '#2B3844' : '#FFFFFF',
              }}
            >
              {filterCountries.map((item) => (
                <FilterItems onClick={() => handleRegion(item)} key={item}>
                  {item}
                </FilterItems>
              ))}
            </div>
          )}
        </div>
      </div>
      <Outlet context={{ data, loading, error }} />
    </>
  );
}


// Function to handle data returned
export function handleData(data) {
  const parsedData = data.map((item) => {
    const nativeName = Object.values(item.name.nativeName)[0]
    const currencies = Object.values(item.currencies).map(currency => {
      return currency.name
    })
    const languages = Object.values(item.languages)

    return {
      name: item.name?.common || 'nill',
      capital: item.capital || 'nill',
      region: item.region || 'nill',
      population: item.population || 'nill',
      flags: {
        png: item.flags?.png || 'nill',
        alt: item.flags?.alt || 'nill',
      },
      nativeName: nativeName?.common || 'nill',
      subRegion: item.subregion || 'nill',
      tld: item.tld || 'nill',
      currency: currencies || 'nill',
      languages: languages || 'nill',
      borderCountries: item.borders || [],
    };
  });
  return parsedData;
}
