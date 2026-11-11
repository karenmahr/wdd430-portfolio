import { getProjects } from '@/app/lib/projects-db';

export default async function SchoolProjectList() {
  const projects = await getProjects('school');

  if (projects.length === 0) {
    return <p className="text-gray-400">No school projects found.</p>;
  }

  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li
          key={project.id}
          className="border border-gray-700 p-5 rounded-lg bg-gray-900/40 text-white"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-300 mt-2">{project.description}</p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-950/60 text-blue-300 border border-blue-800 text-xs px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-400 hover:underline"
            >
              View Project
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}