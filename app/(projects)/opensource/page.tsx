import { getProjects } from '@/app/lib/projects-db'; 
export default async function OpenSourceProjectsPage() {
  const projects = await getProjects('opensource');

  return (
    <section className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-4">Open Source Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border border-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-300 mt-1">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View repository
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}