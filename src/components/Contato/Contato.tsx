import './Contato.css';

const Contato = () => {
  return (
    <div className="contato-container">
      <div className="contato-content">
        
        <div className="contato-header">
          <h1 className="contato-title">Contact</h1>
          <p className="contato-subtitle">
            Get in touch with the ADSProcSuite development team
          </p>
        </div>

        <div className="contato-body">
          <div className="contato-info">
            <div className="info-card">
              <div className="info-icon">
                📍
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>
                  Centro de Pesquisa Aplicada em Geoinformação (CEPAG)<br />
                  Universidade Federal do Paraná<br />
                  Sala CT17 - Edifício Camil Gemael<br />
                  Curitiba, Paraná<br />
                  Brazil
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                📧
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:cepag@ufpr.br">cepag@ufpr.br</a>
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                📞
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>
                  +55 (41) 3361-3498
                </p>
              </div>
            </div>
          </div>

          <div className="contato-message">
            <div className="message-card">
              <h3>Send us a Message</h3>
              <p>
                Have questions about ADSProcSuite? Interested in collaboration? 
                Feel free to reach out to our team. We're always happy to help 
                with technical support, research partnerships, or general inquiries 
                about our solutions.
              </p>
              <div className="message-features">
                <div className="feature">
                  <span>🛠️</span>
                  <span>Technical Support</span>
                </div>
                <div className="feature">
                  <span>🤝</span>
                  <span>Research Collaboration</span>
                </div>
                <div className="feature">
                  <span>💡</span>
                  <span>Feature Requests</span>
                </div>
                <div className="feature">
                  <span>📚</span>
                  <span>Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contato;