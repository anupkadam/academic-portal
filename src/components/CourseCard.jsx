import { Link } from "react-router-dom";

export default function CourseCard({ title, link }) {

  return (
    <Link to={link}>

      <div className="border rounded-xl p-6 shadow hover:shadow-lg">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

      </div>

    </Link>
  );
}
