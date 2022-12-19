import "./main-page.css";
import Header from "./header";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
// import Hpuse

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses([...houses]);
    };
    fetchHouses();
  }, []);
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      console.log("called");
      return allHouses[randomIndex];
    }
  }, [allHouses]);
  return (
    <Router>
      <div className="container">
        <Header
          subtitle="Providing houses all over the world"
          title="Some Title"
        />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            exact
            path="/"
            element={<FeaturedHouse house={featuredHouse} />}
          />
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          />
          <Route
            path="/house/:id"
            element={<HouseFromQuery allHouses={allHouses} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
