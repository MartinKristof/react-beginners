import { useState } from 'react';
import { TPost } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

export const usePosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [apiError, setApiError] = useState<string>('');

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = (await response.json()) as TPost[];

      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      if (error instanceof Error) {
        setApiError(error.message);
      }
    }
  };

  const addPost = async (name: string, text: string) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text, publishedAt: new Date().getTime() }),
      });
    } catch (error) {
      console.error('Error adding post:', error);
      if (error instanceof Error) {
        setApiError(error.message);
      }
    }
  };

  return { posts, fetchPosts, addPost, apiError };
};
