import { FC, useEffect, useState } from 'react';
import { TErrors } from './types';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import { usePosts } from './hooks/usePosts';
import { Helmet } from 'react-helmet';

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
      <section className="flex flex-col space-y-4 text-left">
        <PostForm onSubmit={handleSubmit} errors={errors} />
        {error && <div className="text-red-500">{error}</div>}
        {loading && <div className="text-black-500">Loading...</div>}
        <section className="space-y-4">
          <PostList posts={posts} />
        </section>
      </section>
    </>
  );
};
