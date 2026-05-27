import Navbar from "./Navbar";
import logo from "../assets/favicon.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
