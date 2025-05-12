  import React from 'react';
  import './Certificates.css';
  import { FaDownload } from 'react-icons/fa';
  
  const Certificates = () => {
    const certificates = [
      {
        id: 1,
        title: "Advanced React Developer",
        issuer: "Meta",
        date: "June 2023",
        description: "Mastered advanced React concepts including hooks, context API, and performance optimization",
        image: "cert1.jpg",
        downloadLink: "/certificates/react-cert.pdf"
      },
      {
        id: 2,
        title: "Advanced React Developer",
        issuer: "Meta",
        date: "June 2023",
        description: "Mastered advanced React concepts including hooks, context API, and performance optimization",
        image: "cert1.jpg",
        downloadLink: "/certificates/react-cert.pdf"
      },
      {
        id: 3,
        title: "Advanced React Developer",
        issuer: "Meta",
        date: "June 2023",
        description: "Mastered advanced React concepts including hooks, context API, and performance optimization",
        image: "cert1.jpg",
        downloadLink: "/certificates/react-cert.pdf"
      },      {
        id: 4,
        title: "Advanced React Developer",
        issuer: "Meta",
        date: "June 2023",
        description: "Mastered advanced React concepts including hooks, context API, and performance optimization",
        image: "cert1.jpg",
        downloadLink: "/certificates/react-cert.pdf"
      },
      // ... other certificates (keep your data)
      // ... (keep your certificate data)
    ];
  
    return (
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="section-title">MY CERTIFICATES</h2>
          <p className="section-subtitle">Professional achievements and qualifications</p>
          
          <div className="certificates-grid">
            {certificates.map(cert => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-front">
                  <img src={`/images/${cert.image}`} alt={cert.title} className="certificate-image" />
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                </div>
                
                <div className="certificate-back">
                  <h3>{cert.title}</h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>
                  <a 
                    href={cert.downloadLink} 
                    className="download-btn"
                    download
                  >
                    <FaDownload className="download-icon" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certificates;