import { useState } from "react";
import FilterSearch from "./components/SearchForm";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  return (
    <>
      <FilterSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </>
  );
}

export default App;
