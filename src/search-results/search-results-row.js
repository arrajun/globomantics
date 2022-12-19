import { useNavigate } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ house }) => {
  const navigate = useNavigate();

  const setActive = () => {
    // history.push(`/house/${house.id}`);
    navigate(`/house/${house.id}`);
    // navigate(`/test`);
  };

  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
