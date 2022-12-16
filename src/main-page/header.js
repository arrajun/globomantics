import GloboLogo from "./GloboLogo.png";
const Header = () => {
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={GloboLogo} className="logo" alt="Globologo" />
      </div>
      <div className="col-md-7 mt-5 subtitle">
        Providing houses all over the world
      </div>
    </header>
  );
};
export default Header;
