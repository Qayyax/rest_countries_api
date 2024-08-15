import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchLayout from "./components/search/SeachLayout";
import DarkModeProvider from "./components/DarkModeContext";
import ContryLayout from "./components/countries/CountryLayout";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
