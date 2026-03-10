import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold text-blue-800">
          Academic Portal
        </h1>

        <div className="space-x-6">

          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/materials">Materials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>

        </div>

      </div>

    </nav>
  );
}
