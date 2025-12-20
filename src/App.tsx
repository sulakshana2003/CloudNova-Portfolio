import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";

// adjust paths to match your project
import SoftwareDevelopment from "./pages/servicesDet/SoftwareDevelopment";
import WebDevelopment from "./pages/servicesDet/WebDevelopment";
import DigitalMarketing from "./pages/servicesDet/DigitalMarketing";
import SaaSCloudSolutions from "./pages/servicesDet/SaaSCloudSolutions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Services />} />

      {/* Services details */}
      <Route path="/services/software-development" element={<SoftwareDevelopment />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/saas-cloud-solutions" element={<SaaSCloudSolutions />} />
    </Routes>
  );
}
