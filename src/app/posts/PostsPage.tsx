import { FC, useEffect, useState } from 'react';
import { TErrors } from '../types/types';
import { PostList } from '../components/PostList';
import { PostForm } from './components/PostForm';
import { usePosts } from './hooks/usePosts';
import { Helmet } from 'react-helmet';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner/Spinner';

export const PostsPage: FC = () => {
  const { posts, fetchPosts, addPost, error, loading } = usePosts();
  const [errors, setErrors] = useState<TErrors>({
    name: { message: '' },
    text: { message: '' },
  });

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
  }, []);

  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <PostForm onSubmit={handleSubmit} errors={errors} />
      <ErrorMessage>{error}</ErrorMessage>
      {loading && <Spinner />}
      <PostList posts={posts} />
    </>
  );
};
