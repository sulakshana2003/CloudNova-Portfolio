import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import Projects from './pages/projects.tsx';



function App() {


  return (
      <BrowserRouter>
           
         

          <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/projects" element={<Projects />} />


          </Routes>

      </BrowserRouter>
  )
}

export default App
