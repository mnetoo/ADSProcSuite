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
        </div>
        
        <div className="banner-video">
          <div className="video-container">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/UqjlNS3Ufp4"
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