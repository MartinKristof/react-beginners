import { FC, useState } from 'react';
import { useSearch } from './hooks/useSearch';
import { PostList } from '../components/PostList';
import { useDebounce } from 'use-debounce';
import { Helmet } from 'react-helmet';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner/Spinner';
import { SearchForm } from './components/SearchForm';

export const SearchPage: FC = () => {
  const [search, setSearch] = useState('');
  const [term] = useDebounce(search, 500);
  const { posts, error, loading } = useSearch(term);

  const handleChange = (value: string) => {
    setSearch(value);
  };

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
