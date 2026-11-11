import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
    children: React.ReactNode;
    }) {
      return (
        <section>
            <nav>
                <Link href="/projects" className="text-blue-500 hover:text-blue-700">Projects</Link>
                <Link href="/projects/settings" className="text-blue-500 hover:text-blue-700">Settings</Link>
            </nav>
            {children}
        </section>
      );
    }