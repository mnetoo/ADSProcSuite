import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">
            Discover the ADSProcSuite

          </h1>
          <p className="banner-description">
            The best photogammetry software for the ADS 80/100 sensor.
          </p>
          <button className="banner-button">
            TRY IT NOW
          </button>
          
          {/* <div className="banner-features">
            <div className="feature-item">
              <span className="feature-new">NEW FEAT IN AGISO!</span>
            </div>
            <div className="feature-item">
              <span className="feature-shape">SHAPE 2.0</span>
            </div>
          </div> */}
        </div>
        
        <div className="banner-video">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Imvfxo2pi1Q?start=12"
              title="ADSProcSuite Demonstration"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;