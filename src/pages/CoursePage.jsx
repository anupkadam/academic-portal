import { useEffect, useState } from "react";
import { getCourseFiles } from "../utils/githubApi";

export default function CoursePage() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    getCourseFiles("ai").then(setFiles);
  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Artificial Intelligence
      </h1>

      <ul className="space-y-3">

        {files.map((file) => (
          <li key={file.name}>
            <a
              href={file.download_url}
              className="text-blue-600"
            >
              {file.name}
            </a>
          </li>
        ))}

      </ul>

    </div>
  );
}
