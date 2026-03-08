export async function getCourseFiles(course) {

  const url =
    `https://api.github.com/repos/anupkadam/academic-portal/contents/content/${course}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
