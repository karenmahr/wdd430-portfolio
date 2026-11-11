import { Suspense } from 'react';
import SchoolProjectList from '@/app/ui/school-project-list';
import ProjectCardSkeleton from '@/app/ui/skeletons';

export default function SchoolPage() {
  return (
    <main>
      <h1>School Projects</h1>

      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}