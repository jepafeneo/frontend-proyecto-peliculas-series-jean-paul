import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header-item">
      <Link to="/">Inicio</Link>
      <Link to="/movies">Peliculas</Link>
      <a href="#">Series</a>
      <a href="#">Admin</a>
    </nav>
  );
}

export default Navbar;
