import { usePagination } from 'react-instantsearch';
import { Pagination } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function RecipePagination({ nbPages }) {
  const { refine, currentRefinement } = usePagination();

  const [localCurrentPage, setLocalCurrentPage] = useState(currentRefinement + 1);

  useEffect(() => {
    refine(localCurrentPage - 1);
    window.scrollTo({
      top: 750,
      left: 0,
      behavior: 'smooth',
    });
  }, [localCurrentPage, refine]);

  return (
    <Pagination
      color="secondary"
      size="lg"
      total={nbPages}
      page={localCurrentPage}
      className="flex justify-center mt-1 mx-0"
      onChange={(newPage) => setLocalCurrentPage(newPage)}
    />
  );
}
