import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Materials from "../pages/Materials";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import CoursePage from "../pages/CoursePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ai" element={<CoursePage />} />
    </Routes>
  );
}
