import './Cepag.css';

const Cepag = () => {
  return (
    <div className="cepag-container">
      <div className="cepag-content">
        
        <div className="cepag-header">
          <h1 className="cepag-title">CEPAG</h1>
          <p className="cepag-subtitle">
            Centro de Pesquisa Aplicada em Geoinformação
          </p>
        </div>

        <div className="cepag-body">
          <div className="cepag-text">
            <div className="cepag-section">
              <h2 className="section-title">About the Laboratory</h2>
              <p className="section-description">
                The Applied Geoinformation Research Center (CEPAG) at Federal University of Paraná 
                is dedicated to advancing research in geospatial technologies, remote sensing, and 
                digital photogrammetry. Our laboratory serves as an innovation hub for developing 
                cutting-edge solutions in aerial data processing and cartographic production.
              </p>
            </div>

            <div className="cepag-section">
              <h2 className="section-title">Research Focus</h2>
              <p className="section-description">
                Specializing in airborne sensor data processing, CEPAG develops sophisticated 
                algorithms and software tools for photogrammetric applications. Our work combines 
                theoretical research with practical implementations, bridging the gap between 
                academic innovation and industry requirements.
              </p>
            </div>

            <div className="cepag-section">
              <h2 className="section-title">ADSProcSuite Development</h2>
              <p className="section-description">
                ADSProcSuite represents one of our flagship projects, embodying CEPAG's commitment 
                to creating robust, efficient, and scalable solutions for the geospatial community. 
                Developed by our team of researchers and engineers, this software suite addresses 
                the complex challenges of modern aerial survey data processing.
              </p>
            </div>

            <div className="cepag-features">
              <div className="feature-item">
                <h3>Innovation</h3>
                <p>Pioneering research in geospatial technologies</p>
              </div>
              <div className="feature-item">
                <h3>Excellence</h3>
                <p>High-quality academic and applied research</p>
              </div>
              <div className="feature-item">
                <h3>Collaboration</h3>
                <p>Partnerships with industry and academia</p>
              </div>
            </div>
          </div>

          <div className="cepag-visual">
            <div className="cepag-image">
              <div className="image-placeholder">
                <span>Laboratory Image</span>
              </div>
            </div>
            <div className="cepag-info">
              <h3>Laboratory Information</h3>
              <ul>
                <li><strong>Location:</strong> Federal University of Paraná</li>
                <li><strong>Focus:</strong> Geoinformation & Photogrammetry</li>
                <li><strong>Expertise:</strong> ADS Data Processing</li>
                <li><strong>Status:</strong> Active Research Center</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cepag;