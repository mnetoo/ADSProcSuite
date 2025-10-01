import './Header.css';
import { useNavigate } from 'react-router-dom';

import LOGO from '../../assets/LogoADS.png';

const Header = () => {

  const navigate = useNavigate();
  return (
    <header className="app-header">
      <nav className="nav-container">
        <a href="/" className="logo-link">
          <img src={LOGO} alt="LogoADS" className="logo-image" />
        </a>
        <nav className="nav-links">
            <a onClick={() => navigate('/')}>Home</a>
            <a onClick={() => navigate('/about')}>About</a>
            <a onClick={() => navigate('/tools')}>Tools</a>
            <a onClick={() => navigate('/contact')}>Contact</a>
        </nav>
      </nav>
    </header>
  );
};

export default Header;