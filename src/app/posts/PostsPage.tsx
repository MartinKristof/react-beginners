import { FC } from 'react';
import { PostList } from '../components/PostList';
import { PostForm } from './components/PostForm';
import { usePosts } from './hooks/usePosts';
import { Helmet } from 'react-helmet';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner/Spinner';

export const PostsPage: FC = () => {
  const { posts, error, loading, handleSubmit, errors } = usePosts();

  return (
    <>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <PostForm onSubmit={handleSubmit} errors={errors} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Spinner />}
      <PostList posts={posts} />
    </>
  );
};
