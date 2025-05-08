import React from 'react'
import '../PDFDownloadSection/PDFDownloadSection.css'

function PDFDownloadSection() {
  return (
    
    <section id="cta-section">
      <div className="cta">
        <div className="container">
            <div className="row">
              
                <div className="col-md-9">
                    <h1>Download My Resume / CV</h1>
                      <h4>Here's a quick look at my professional journey, including my education, work experience, and key technical skills. You can download my full resume below for more details.</h4>
                  </div>
                  
                  <div className="col-md-3">
                    <div className="cta-btn" data-wow-delay="0.4s">
                      <a className="btnresume" href="https://drive.google.com/file/d/1UgoRTNYfytKFHx3ErOyg52jHbkkHSsQZ/view?usp=sharing" target="_blank" role="button">Download Resume</a>
                      <a className="btncv"  >Download Cv</a>
                    </div>
                    
                  </div>
                  
              </div> 
          </div> 
      </div>
    </section>
  )
}

export default PDFDownloadSection