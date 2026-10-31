import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />//usa el titulo como identificador unico
      ))}
    </section>
  );
}

{/*toma los datos json de projectcard, y al ejecutar .map, se crea un nuevo array 
    de cards y las organiza en una lista*/}