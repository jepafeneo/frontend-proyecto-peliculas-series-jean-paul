import Navbar from "./Navbar";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content container">
        <div className="header-item">ScreenHub</div>
        <Navbar />
        {/* <span className="header-item"></span> */}
      </div>
    </header>
  );
}

export default Header;
