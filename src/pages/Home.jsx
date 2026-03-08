import CourseCard from "../components/CourseCard";

export default function Home() {

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Academic Learning Portal
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <CourseCard title="Artificial Intelligence" link="/ai" />

        <CourseCard title="Software Testing" link="/testing" />

        <CourseCard title="Machine Learning" link="/ml" />

      </div>

    </div>
  );
}
