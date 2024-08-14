import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchLayout from "./components/search/SeachLayout";
import DarkModeProvider from "./components/DarkModeContext";

function App() {

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<SearchLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
