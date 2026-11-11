'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinksProps {
  link?: string;
} 
        
export default function ProjectCard({link}: NavLinksProps) {
    const pathname = usePathname();
  return (
    <ul className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
          <li><Link href="/projects" className={pathname === '/projects' ? 'font-bold text-blue-600' : 'text-gray-500'}>Projects</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? 'font-bold text-blue-600' : 'text-gray-500'}>About</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? 'font-bold text-blue-600' : 'text-gray-500'}>Contact</Link></li>
        </ul>
  );
}
