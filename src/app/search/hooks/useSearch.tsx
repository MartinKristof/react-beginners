import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { TPost } from '../../types/types';
import { useDebounce } from 'use-debounce';

export const useSearch = () => {
  const { data: posts, loading, error, getData } = useApi<TPost>();
  const [search, setSearch] = useState('');
  const [term] = useDebounce(search, 500);

  const handleChange = (value: string) => {
    setSearch(value);
  };

  const fetchSearch = async () => {
    if (!term.trim()) {
      return;
    }

    await getData(`/?q=${term}`);
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return { posts, fetchSearch, error, loading, search, handleChange };
};
