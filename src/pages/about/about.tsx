import "./about.css";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cepag from '../../components/Cepag/Cepag';
import ADSTeam from '../../components/ADSTeam/ADSTeam';

const Home = () => {
  return (
    <div className="home-container">
      
      <Header />

        < Cepag />
        < ADSTeam />

      <Footer />

    </div>
  );
};

export default Home;