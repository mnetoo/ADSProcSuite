import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';

import LOGO from '../../assets/LogoADS.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="app-header">
      <div className="header-background">
        <div className="header-glow"></div>
      </div>
      <nav className="nav-container">
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src={LOGO} alt="LogoADS" className="logo-image" />
            <div className="logo-text">
              <span className="logo-title">ADSProcSuite</span>
              <span className="logo-subtitle">Centro de Pesquisa Aplicada a Geoinformação</span>
            </div>
          </a>
        </div>
        
        <nav className="nav-links">
          <a 
            className={`nav-link ${isActiveRoute('/') ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            Home
          </a>
          <a 
            className={`nav-link ${isActiveRoute('/about') ? 'active' : ''}`}
            onClick={() => navigate('/about')}
          >
            About
          </a>
          <a 
            className={`nav-link ${isActiveRoute('/tools') ? 'active' : ''}`}
            onClick={() => navigate('/tools')}
          >
            Tools
          </a>
          <a 
            className={`nav-link ${isActiveRoute('/contact') ? 'active' : ''}`}
            onClick={() => navigate('/contact')}
          >
            Contact
          </a>
        </nav>
      </nav>
    </header>
  );
};

export default Header;