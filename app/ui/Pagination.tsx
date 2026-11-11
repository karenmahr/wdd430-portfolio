'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex items-center justify-center gap-4 py-6">
      {currentPage <= 1 ? (
        <span className="px-4 py-2 text-sm text-gray-500 border border-gray-700 rounded cursor-not-allowed">Back</span>
      ) : (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 text-sm text-white border border-gray-600 rounded hover:bg-gray-800 transition">Back</Link>
      )}

      <span className="text-sm text-gray-300">
        Page {currentPage} of {totalPages || 1}
      </span>

      {currentPage >= totalPages ? (
        <span className="px-4 py-2 text-sm text-gray-500 border border-gray-700 rounded cursor-not-allowed">Next</span>
      ) : (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 text-sm text-white border border-gray-600 rounded hover:bg-gray-800 transition">Next</Link>)}
    </div>
  );
}