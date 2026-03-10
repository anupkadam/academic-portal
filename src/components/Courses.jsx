import { Brain, Code, BookOpen } from "lucide-react";

export default function Courses() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow p-6 rounded-xl">
          <Brain size={40}/>
          <h3 className="text-xl font-bold mt-4">
            Artificial Intelligence
          </h3>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <Code size={40}/>
          <h3 className="text-xl font-bold mt-4">
            Software Testing
          </h3>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <BookOpen size={40}/>
          <h3 className="text-xl font-bold mt-4">
            Machine Learning
          </h3>
        </div>

      </div>

    </section>
  );
}
