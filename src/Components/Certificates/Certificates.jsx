  import React from 'react';
  import './Certificates.css';
  import { FaDownload } from 'react-icons/fa';

  import Ccert from '../../assets/Certificatesimg/C-Certificate.jpg';
  import Javacert from '../../assets/Certificatesimg/Java-Certificate.jpg';
  import Androidcert from '../../assets/Certificatesimg/IITAndroidDevelopmentWorkshopCertificate.jpg';
  import Machinelearningcert from '../../assets/Certificatesimg/IITMachineLearningWorkshopCertificate.jpg';


  const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "PROGRAMMING IN ADVANCED C",
      issuer: "T4TEQ Software Solutions",
      date: "July 2023",
      description: "Gained in-depth knowledge of advanced C programming concepts including pointers, memory management, data structures, and file handling.",
      image: Ccert,
      downloadLink: "https://drive.google.com/file/d/1SAXM-5DJiIWXa85yg3tEBa03GlaXp7sX/view?usp=sharing"
    },
    {
      id: 2,
      title: "PROGRAMMING IN CORE JAVA",
      issuer: "T4TEQ Software Solutions",
      date: "Sep 2023",
      description: "Acquired strong foundational skills in Java programming, covering object-oriented concepts, exception handling, collections, and multithreading.",
      image: Javacert,
      downloadLink: "https://drive.google.com/file/d/1DE4bDWWvOPd3dRKzUNrFycCt1CZS2kze/view?usp=sharing"
    },
    {
      id: 3,
      title: "ANDROID DEVELOPMENT WORKSHOP",
      issuer: "Computer Society Of MIT",
      date: "May 2022",
      description: "Learned the basics of Android app development including UI design, activities, intents, and working with Android Studio.",
      image: Androidcert,
      downloadLink: "https://drive.google.com/file/d/1tLrL17b6PM4WfmhIs7YK2kn0lzkFfvNs/view?usp=sharing"
    },
    {
      id: 4,
      title: "MACHINE LEARNING WORKSHOP",
      issuer: "NGCS",
      date: "Nov 2022",
      description: "Introduced to core machine learning concepts such as supervised and unsupervised learning, model training, and practical applications using Python.",
      image: Machinelearningcert,
      downloadLink: "https://drive.google.com/file/d/1JTgKK56DdoMXHOMZCnEh5xH5RpjrS0yd/view?usp=sharing"
    },
  ];

  
    return (
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="cert-section-title">MY CERTIFICATES</h2>
          <p className="cert-section-subtitle">Professional achievements and qualifications</p>
          
          <div className="certificates-grid">
            {certificates.map(cert => (
              <div key={cert.id} className="certificate-card">
                <div className="certificate-front">
                  <img src={cert.image} alt={cert.title} className="certificate-image" />
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