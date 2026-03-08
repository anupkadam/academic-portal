import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between">

        <h1 className="text-xl font-bold">
          Academic Portal
        </h1>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/materials">Materials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
