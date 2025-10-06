import './Equalizacao.css';
import VIDEO from '../../assets/fast_equalization.mp4';
import { useRef, useState } from 'react';

const Equalizacao = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="equalizacao-container">
      <div className="equalizacao-content">
        
        <div className="equalizacao-header">
          <h1 className="equalizacao-title">Orthophoto Equalization</h1>
          <p className="equalizacao-subtitle">
            Demonstration of the orthophoto equalization tool.
          </p>
        </div>

        <div className="equalizacao-description">
          <p>
            Our equalization tool uses advanced algorithms for fast and efficient image processing, 
            optimizing contrast and improving visual quality for geoinformation and photogrammetry applications.
          </p>
        </div>

        <div className="video-demo-container">
          <div className="video-wrapper">
            <video 
              ref={videoRef}
              className="demo-video"
              controls
              autoPlay
              muted
              loop
              onPlay={handlePlay}
              onPause={handlePause}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23f1f5f9'/%3E%3Cpath d='M400,225 L370,245 L370,205 Z' fill='%233b82f6'/%3E%3C/svg%3E"
            >
              <source src={VIDEO} type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <div className={`video-overlay ${isPlaying ? 'hidden' : ''}`}>
              <div className="play-indicator">
                <div className="play-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Processing</h3>
            <p>Optimized algorithms for real-time equalization.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>High Precision</h3>
            <p>Satisfactory results for several cases.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Batch Processing</h3>
            <p>Ability to process huge image blocks.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Equalizacao;