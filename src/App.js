import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Header from "./components/Header";
import Result from "./components/Result";
import "./app.css";

const name = require("@rstacruz/startup-name-generator");

function App() {
  const [search, setname] = useState({
    headExpanded: true,
    suggestedNames: [],
  });
  const handleInputchange = (inputText) => {
    setname({
      headExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };
  console.log(search.headExpanded);
  return (
    <div className="App">
      <Header headExpanded={search.headExpanded} />
      <Searchbar handleInputchange={handleInputchange} />
      <Result suggestedNames={search.suggestedNames} />
    </div>
  );
}

export default App;
