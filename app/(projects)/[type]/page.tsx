import { getProjects } from '@/app/lib/projects-db'; 

export default async function FilteredProjectsPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const projects = await getProjects(type);

  return (
    <main>
      <h1>{type} Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}