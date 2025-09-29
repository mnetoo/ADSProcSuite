import './Header.css';

import LOGO from '../../assets/LogoADS.png';

const Header = () => {
  return (
    <header className="app-header">
      <nav className="nav-container">
        <a href="/" className="logo-link">
          <img src={LOGO} alt="LogoADS" className="logo-image" />
        </a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">About</a></li>
          <li><a href="/contato">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;