import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/projects";
import Services from "./pages/Services";
import SoftwareDevelopment from "./pages/servicesDet/SoftwareDevelopment";
import WebDevelopment from "./pages/servicesDet/WebDevelopment";
import DigitalMarketing from "./pages/servicesDet/DigitalMarketing";
import SaaSCloudSolutions from "./pages/servicesDet/SaaSCloudSolutions";

import LenisProvider from "./components/LenisProvider";
import BlogPage from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import FutureWeb from "./pages/blog/FutureWeb";
import MasteringReact from "./pages/blog/MasteringReact";
import CompanyMilestones from "./pages/blog/CompanyMilestones";

function App() {
  return (
    <BrowserRouter>
      <LenisProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<BlogPage />} />
             <Route path="/about" element={<AboutUs />} />
          <Route
            path="/services/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/saas-cloud-solutions"
            element={<SaaSCloudSolutions />}
          />
          <Route path="/blog/future-web-2025" element={<FutureWeb />} />
          <Route path="/blog/mastering-react-node" element={<MasteringReact />} />
          <Route path="/blog/company-milestones" element={<CompanyMilestones />} />
        </Routes>
      </LenisProvider>
    </BrowserRouter>
  );
}

export default App;
