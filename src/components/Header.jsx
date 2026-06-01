import Navbar from "./Navbar";
import logo from "../assets/favicon.svg";
import SearchBox from "./SearchBox";
import { movies } from "../data/movies";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Navbar />
        <SearchBox movies={movies} />
      </div>
    </header>
  );
}

export default Header;
