import './Requisitos.css';

const Requisitos = () => {
  const requirements = [
    {
      category: "Processor",
      requirement: "Intel or AMD processor with 5 cores or higher",
      icon: "⚡"
    },
    {
      category: "Memory",
      requirement: "128GB DDR5 RAM or higher",
      icon: "💾"
    },
    {
      category: "Storage",
      requirement: "Solid-state drive SSD (NVMe M.2 Recommended) for fast file read/write access",
      icon: "💿"
    },
    {
      category: "Network",
      requirement: "Network adapter with IPv4 and IPv6 support connected via Ethernet",
      icon: "🌐"
    },
    {
      category: "Operating System",
      requirement: "Windows 10 or later, 64-bit version (x64)",
      icon: "🖥️"
    },
    {
      category: "Security",
      requirement: "Microsoft Windows Defender. Other antivirus programs have not been tested",
      icon: "🛡️"
    },
    {
      category: "User Privileges",
      requirement: "User profile with administrator privileges (required for installation)",
      icon: "👤"
    },
    {
      category: "Regional Settings",
      requirement: "Decimal separator must be configured as a dot (.) instead of a comma (,)",
      icon: "⚙️"
    }
  ];

  return (
    <div className="requisitos-container">
      <div className="requisitos-content">
        
        <div className="requisitos-header">
          <h1 className="requisitos-title">System Requirements</h1>
          <p className="requisitos-subtitle">
            Before installing the software, please make sure your computer meets the following minimum requirements
          </p>
        </div>

        <div className="requirements-grid">
          {requirements.map((item, index) => (
            <div key={index} className="requirement-card">
              <div className="requirement-icon">
                {item.icon}
              </div>
              <div className="requirement-content">
                <h3 className="requirement-category">{item.category}</h3>
                <p className="requirement-text">{item.requirement}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="requisitos-footer">
          <div className="requisitos-note">
            <h3>Important Notes</h3>
            <ul>
              <li>These are minimum requirements for optimal performance</li>
              <li>Higher specifications may be required for large datasets</li>
              <li>Ensure all drivers are up to date before installation</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Requisitos;