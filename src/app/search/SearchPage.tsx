import { FC } from 'react';
import { useSearch } from './hooks/useSearch';
import { PostList } from '../components/PostList';
import { Helmet } from 'react-helmet';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner/Spinner';
import { SearchForm } from './components/SearchForm';

export const SearchPage: FC = () => {
  const { posts, error, loading, search, handleChange } = useSearch();

  return (
    <>
      <Helmet>
        <title>Search posts</title>
      </Helmet>
      <SearchForm searchValue={search} onChange={handleChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <Spinner />}
      <PostList posts={posts} />
    </>
  );
};
