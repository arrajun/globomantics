import { useNavigate } from "react-router-dom";

const HouseFilter = ({ allHouses }) => {
  const navigate = useNavigate();
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((item) => item.country)))
    : [];
  countries.unshift(null);
  const onSearchChange = (e) => {
    const country = e.target.value;
    navigate(`/searchresults/${country}`);
    // history.push(`/searchresults/${country}`);
  };
  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in the country :
      </div>
      <div className="mb-3 col-md-4">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
