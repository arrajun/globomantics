import GloboLogo from "./GloboLogo.png";
import { useNavigate } from "react-router-dom";
const Header = ({ subtitle, title }) => {
  const navigate = useNavigate();
  const homeRedirect = () => {
    navigate("/");
  };
  return (
    <header className="row">
      <div className="col-md-5">
        <img
          src={GloboLogo}
          onClick={homeRedirect}
          className="logo"
          alt="Globologo"
        />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};
export default Header;
