import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Projects from './pages/projects.tsx';
import Services from './pages/Services.tsx';
import SoftwareDevelopment from './pages/servicesDet/SoftwareDevelopment.tsx';
import WebDevelopment from './pages/servicesDet/WebDevelopment.tsx';
import DigitalMarketing from './pages/servicesDet/DigitalMarketing.tsx';
import SaaSCloudSolutions from './pages/servicesDet/SaaSCloudSolutions.tsx';



function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />



      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/saas-cloud-solutions" element={<SaaSCloudSolutions />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App

