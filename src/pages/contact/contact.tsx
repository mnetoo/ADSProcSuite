import "./contact.css";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Contato from '../../components/Contato/Contato';

const Home = () => {
  return (
    <div className="home-container">
      
      <Header />
      <Contato />
      <Footer />

    </div>
  );
};

export default Home;