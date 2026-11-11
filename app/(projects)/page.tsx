import { getProjects, Project } from '@/app/lib/projects-db';

async function getServerSideProps(): Promise<Project[]> {
  return await getProjects();
}

export default async function ProjectsPage() {
  const projects = await getServerSideProps();

  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}