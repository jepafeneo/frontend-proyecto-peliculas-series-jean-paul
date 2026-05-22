import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">ScreenHub</div>
        <Navbar />
        {/* <input type="search" placeholder="Buscar..." className="header-item" /> */}
      </div>
    </header>
  );
}

export default Header;
