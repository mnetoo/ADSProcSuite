import "./home.css";

import Header from '../../components/Header/Header';
import Intro from '../../components/Introdução/Introducao';
import Metodologia from '../../components/Metodologia/Metodologia';
import Resultados from '../../components/Resultados/Resultados';
import Conclusao from '../../components/Conclusão/Conclusao';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div className="home-container">
      
      <Header />

        <div className="home-content">

          <Banner />
          <Intro />
          <Metodologia />
          <Resultados />
          <Conclusao />
          
        </div>

      <Footer />

    </div>
  );
};

export default Home;