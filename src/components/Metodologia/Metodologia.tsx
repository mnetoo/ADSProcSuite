import './Metodologia.css';

const Metodologia = () => {
  return (
    <div className="metodologia-container">
      <div className="metodologia-content">
        
        <h2 className="metodologia-title">Methodology</h2>

        <p className="metodologia-intro">
          ADSProcSuite was designed with a focus on three main functions:
        </p>

        <div className="metodologia-grid">
          <div className="list-item">
            <div className="item-marker"></div>
            <div className="item-content">
              <h3 className="item-title">Orthophoto Generation</h3>
              <p className="item-description">
                Application of geometric correction processes based on digital terrain 
                models and exterior orientation parameters (MIKHAIL; BETHEL; MCGLONE, 2001).
              </p>
            </div>
          </div>

          <div className="list-item">
            <div className="item-marker"></div>
            <div className="item-content">
              <h3 className="item-title">Positional Accuracy Verification</h3>
              <p className="item-description">
                Use of ground control points (GCPs) to assess the root mean square error (RMSE), 
                in accordance with ASPRS standards (2015).
              </p>
            </div>
          </div>

          <div className="list-item">
            <div className="item-marker"></div>
            <div className="item-content">
              <h3 className="item-title">Radiometric Equalization</h3>
              <p className="item-description">
                Implementation of techniques for tonal homogenization between image blocks, 
                ensuring visual coherence in the mosaic (WOLF; DEWITT; WILKINSON, 2014).
              </p>
            </div>
          </div>

          <div className="list-item">
            <div className="item-marker"></div>
            <div className="item-content">
              <h3 className="item-title">Integration & Compatibility</h3>
              <p className="item-description">
                Additional tools enable integration with external data such as the 
                SRTM and ASTER global elevation models, as well as integration with 
                third-party applications like QT Reader 64-bit for data visualization.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Metodologia;