import { getProjects, Project } from '@/app/lib/projects-db';

async function getServerSideProps(query: string, page: number): Promise<Project[]> {
  return await getProjects(query, page);
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || '';
  const currentPage = Number(resolvedParams?.page) || 1;

  const projects = await getServerSideProps(query, currentPage);

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