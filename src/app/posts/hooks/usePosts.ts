import { useApi } from '../../hooks/useApi';
import { TPost } from '../types';

export const usePosts = () => {
  const { data: posts, loading, error, fetchData, addData } = useApi<TPost>();

  const fetchPosts = async () => {
    await fetchData();
  };

  const addPost = async (name: string, text: string) => {
    await addData({ name, text, publishedAt: new Date().getTime() });
  };

  return { posts, fetchPosts, addPost, loading, error };
};
