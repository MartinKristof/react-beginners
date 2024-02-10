import { FC, useEffect, useState } from 'react';
import { TErrors, TPost } from './types';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

const API_URL = import.meta.env.VITE_API_URL;

export const PostsPage: FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [errors, setErrors] = useState<TErrors>({
    name: { message: '' },
    text: { message: '' },
  });

  const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = (await response.json()) as TPost[];

    setPosts(data);
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

    const addPost = async () => {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text, publishedAt: new Date().getTime() }),
      });
    };

    await addPost();

    setErrors({
      name: { message: '' },
      text: { message: '' },
    });

    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="flex flex-col space-y-4 text-left">
      <PostForm onSubmit={handleSubmit} errors={errors} />
      <section className="space-y-4">
        <PostList posts={posts} />
      </section>
    </section>
  );
};
