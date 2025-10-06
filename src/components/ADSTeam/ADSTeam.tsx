import './ADSTeam.css';

import LEONARDO from '../../assets/LeonardoErcolin2.jpg';
import CHRISTOPHER from '../../assets/ChristopherPinheiro.jpg';
import LUCIENE from '../../assets/LucieneDelazari.jpg';
import MARCUS from '../../assets/MarcusNeto.jpg';

const ADSTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Prof. Dr. Leonardo Ercolin Filho",
      role: "Project Coordinator | Software Architect",
      description: "Leads the system design and architecture of ADSProcSuite, with a strong focus on high-performance geospatial applications.",
      expertise: ["Photogrammetry", "Project Management", "Algorithm Development"],
      email: "leonardo.ercolin@ufpr.br",
      photo: LEONARDO
    },
    {
      id: 2,
      name: "Prof. Dr. Luciene Stamato Delazari",
      role: "UI/UX | Quality Assurance",
      description: "Oversees user-centered design and ensures software reliability, usability, and overall quality.",
      expertise: ["UI/UX", "Topography", "System Architecture"],
      email: "luciene@ufpr.br",
      photo: LUCIENE
    },
    {
      id: 3,
      name: "Marcus Neto",
      role: "C++ VCL | Python Developer (Intermediate)",
      description: "Specializes in robust development using C++ with the VCL framework and Python, enhancing Windows-based application performance.",
      expertise: ["C++ Builder VCL", "Image Processing", "Python"],
      email: "marcusneto@ufpr.br",
      photo: MARCUS
    },
    {
      id: 4,
      name: "Christopher Dobb",
      role: "Python | GUI Developer (Intermediate)",
      description: "Develops high-performance backend scripts for ADS data processing and designs intuitive graphical interfaces",
      expertise: ["Image Processing", "Back-end", "Python Automation"],
      email: "christopher.dobb@ufpr.br",
      photo: CHRISTOPHER
    }
  ];

  return (
    <div className="team-container">
      <div className="team-content">
        
        <div className="team-header">
          <h1 className="team-title">Development Team</h1>
          <p className="team-subtitle">
            The talented individuals behind ADSProcSuite innovation
          </p>
        </div>

        <div className="team-description">
          <p>
            Our multidisciplinary team combines expertise in geoinformation, software engineering, 
            and user experience design to create cutting-edge solutions for aerial data processing. 
            Each member brings unique skills that contribute to the success of ADSProcSuite.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <div className="member-avatar">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="member-photo"
                />
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
                
                <div className="member-expertise">
                  <h4>Expertise</h4>
                  <div className="expertise-tags">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="member-contact">
                  <a href={`mailto:${member.email}`} className="contact-link">
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ADSTeam;