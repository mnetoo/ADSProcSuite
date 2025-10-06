import "./tools.css";

import Ferramentas from '../../components/Ferramentas/Ferramentas';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Equalizacao from '../../components/Equalização/Equalizacao';

const Tools = () => {
  return (

    <div className="tools-page">
      < Header />
      <Ferramentas />
      <Equalizacao />
      < Footer />
    </div>
  );
};

export default Tools;