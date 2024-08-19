import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import SearchLayout from "./components/search/SeachLayout";
import DarkModeProvider from "./components/DarkModeContext";
import ContryLayout from "./components/countries/CountryLayout";
import CountryDetail from "./components/countries/CountryDetail";
import BorderCountry from "./components/countries/BorderCountries";

function App() {

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<SearchLayout />}>
              <Route path="countries" element={<ContryLayout />} />
              <Route path="countries/:pageID" element={<ContryLayout />} />
            </Route>
            <Route path="/countries/:pageID/:country" element={<CountryDetail />} />
            <Route path="/countries/:pageID/:country/:border" element={<BorderCountry />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
