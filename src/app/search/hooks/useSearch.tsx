import { useEffect } from 'react';
import { useApi } from '../../hooks/useApi';
import { TPost } from '../../types/types';

export const useSearch = (term: string) => {
  const { data: posts, loading, error, fetchData } = useApi<TPost>();

  const fetchSearch = async (term: string) => {
    if (!term.trim()) {
      return;
    }

    await fetchData(`/?q=${term}`);
  };

  useEffect(() => {
    fetchSearch(term);
  }, [term]);

  return { posts, fetchSearch, error, loading };
};
