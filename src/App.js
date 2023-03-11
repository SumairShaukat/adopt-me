import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import Pet from "./components/Pet";
import Details from "./components/Details";
import SearchParams from "./components/SearchParms";
function App() {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
