import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { TErrors, TPost } from '../../types/types';

export const usePosts = () => {
  const { data: posts, loading, error, getData, addData } = useApi<TPost>();
  const [errors, setErrors] = useState<TErrors>({
    name: { message: '' },
    text: { message: '' },
  });

  const fetchPosts = async () => {
    await getData();
  };

  const addPost = async (name: string, text: string) => {
    await addData({ name, text, publishedAt: new Date().getTime() });
  };

  const handleSubmit = async (nameValue: string, textValue: string) => {
    const name = nameValue;
    const text = textValue;

    if (!name || !text) {
      setErrors({
        name: { message: !name ? 'Name is required' : '' },
        text: { message: !text ? 'Text is required' : '' },
      });

      return;
    }

    await addPost(name, text);

    setErrors({
      name: { message: '' },
      text: { message: '' },
    });

    await fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, loading, error, handleSubmit, errors };
};
