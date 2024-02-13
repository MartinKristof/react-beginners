import { useState } from 'react';
import { TPost } from '../../posts/types';

const API_URL = import.meta.env.VITE_API_URL;

export const useSearch = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [apiError, setApiError] = useState<string>('');

  const fetchSearch = async (term: string) => {
    if (!term.trim()) {
      return [];
    }

    try {
      const response = await fetch(API_URL + '/?q=' + term);
      const data = (await response.json()) as TPost[];

      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (error instanceof Error) {
        setApiError(error.message);
      }
    }
  };

  return { posts, fetchSearch, apiError };
};
