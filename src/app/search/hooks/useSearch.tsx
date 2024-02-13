import { useApi } from '../../hooks/useApi';
import { TPost } from '../../posts/types';

export const useSearch = () => {
  const { data: posts, loading, error, fetchData } = useApi<TPost>();

  const fetchSearch = async (term: string) => {
    if (!term.trim()) {
      return;
    }

    await fetchData(`/posts?search=${term}`);
  };

  return { posts, fetchSearch, error, loading };
};
