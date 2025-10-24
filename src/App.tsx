import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import About from './pages/About';
import Services from './pages/Services';
import Project from './pages/Project';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* All Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          {/* {dynamic routing is here} */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}
