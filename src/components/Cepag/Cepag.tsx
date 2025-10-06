import './Cepag.css';

import FOTO_CEPAG from '../../assets/logo_fundo.jpg';

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
                CEPAG (Center for Applied Research in Geoinformation) is a multidisciplinary subsidiary of the Earth Sciences Sector. 
                Its objective is to support the collection, processing, and analysis of physical and territorial information for applications 
                in various fields: Environment, Transportation, Communications, Energy, and Urban and Regional Planning.
              </p>

              <br /><p className="section-description">
                CEPAG is a multidisciplinary subsidiary of the Earth Sciences Sector. Its objective is to support the collection, processing, 
                and analysis of physical and territorial information for application in various fields: Environment, Transportation, Communications, 
                Energy, and Urban and Regional Planning.
              </p>
              
              <br /><p className="section-description">
                It is composed of professors and researchers from different branches of Geosciences: Cartography, Photogrammetry, Geographic Information Systems, 
                Geodesy, Remote Sensing, Geomorphology, Geography, Geology, Multipurpose Territorial Cadastre and Engineering, who develop research, teaching and 
                community service projects.
              </p>
              
              <br /><p className="section-description">
                CEPAG's mission is to be the research center responsible for providing geoinformation, supporting teaching, research, and outreach activities, 
                as well as the management of UFPR units. Furthermore, it aims to integrate academic knowledge with societal needs in the field of geoinformation, 
                an essential tool for technical decision-making in land management.
              </p>
            </div>

            <div className="cepag-section">
              <h2 className="section-title">Research Focus</h2>
              <p className="section-description">
                CEPAG has produced and maintained updated cartographic databases for all UFPR campuses. It also aims to approve and manage spatial databases 
                in support of the activities carried out by the UFPR Infrastructure Superintendence (SUINFRA). Since 2019, CEPAG has produced cartographic 
                databases for the following campuses:<br /><br />

                <ul>
                  <li>Centro Politécnico e Jardim Botânico</li>
                  <li>Cabral-Agrárias, Juvevê e Batel</li>
                  <li>Rebouças, Reitoria e Santos Andrade</li>
                  <li>Fazenda Experimental Canguiri</li>
                  <li>Palotina, Fazenda Palotina e Maripá no Oeste</li>
                  <li>Matinhos, Mirassol e Centro de Estudos do Mar no Litoral</li>
                </ul>
              </p>

              <br />
              <p className="section-description">
                CEPAG is responsible for developing UFPR CampusMap, a research and outreach project conducted in conjunction with the Cartography 
                and GIS Laboratory. Its objective is to map the external and internal environments of the Federal University of Paraná's campuses, 
                as well as create routes between points of interest. Until 2024, this project was supported by the Provost's Office of Administration, 
                SUINFRA, and the Earth Sciences Department.
              </p>
            </div>

            <div className="cepag-section">
              <h2 className="section-title">ADSProcSuite Development</h2>
              <p className="section-description">
                ADSProcSuite represents one of our flagship projects, embodying CEPAG's commitment to creating robust, efficient, and scalable solutions 
                for the geospatial community. Developed by our team, this software addresses the complex challenges of modern aerial survey data processing.
              </p>
            </div>

            <div className="cepag-features">
              <div className="feature-item">
                <h3>Innovation</h3>
                <p>Specialized algorithms and advanced search.</p>
              </div>
              <div className="feature-item">
                <h3>Performance</h3>
                <p>Balanced processing speed and quality.</p>
              </div>
              <div className="feature-item">
                <h3>Collaboration</h3>
                <p>Partnerships with industry and universities.</p>
              </div>
            </div>
          </div>

          <div className="cepag-visual">
            <div className="cepag-image">
              <div className="image-placeholder">
                <img src={FOTO_CEPAG} alt="logo_cepag" />
              </div>
            </div>
            <div className="cepag-info">
              <h3>Laboratory Information</h3>
              <ul>
                <li><strong>Location:</strong> Federal University of Paraná</li>
                <li><strong>Focus:</strong> Geoinformation & Geotechnology</li>
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