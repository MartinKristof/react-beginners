import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FormGroup } from '../posts/components/FormGroup';
import { useSearch } from './hooks/useSearch';
import { PostList } from '../posts/components/PostList';

export const SearchPage: FC = () => {
  const [search, setSearch] = useState('');
  const { posts, fetchSearch, apiError } = useSearch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetchSearch(search);
  }, [search]);

  return (
    <section className="flex flex-col space-y-4 text-left">
      <div className="w-1/3">
        <FormGroup label="Search" name="search">
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search..."
          />
        </FormGroup>
      </div>
      {apiError && <div className="text-red-500">{apiError}</div>}
      <section className="space-y-4">
        <PostList posts={posts} />
      </section>
    </section>
  );
};
