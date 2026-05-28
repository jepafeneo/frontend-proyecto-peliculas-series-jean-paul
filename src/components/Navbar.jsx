import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header-item">
      <Link to="/">Inicio</Link>
      <Link to="/movies">Peliculas</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
