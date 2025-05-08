import NavBar from './NavBar/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillSection from './SkillSection/SkillSection';
import PDFDownloadSection from './PDFDownloadSection/PDFDownloadSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectSection from './ProjectSection/ProjectSection';
import CertificateSection from './CertificateSection/CertificateSection';

function App() {
  

  return (
    <>
    <NavBar/>
    <main>
      <SkillSection/>
      <PDFDownloadSection />
      <ProjectSection />
      <CertificateSection />

    </main>
    </>
  )
}

export default App
