import { FC } from 'react';

export const SearchPage: FC = () => {
  return (
    <section className="flex flex-col space-y-4 text-left">
      <div className="w-1/3">
        <div className="mt-2">
          <label htmlFor="text" className="block mb-2 text-sm font-medium">
            Search:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search..."
          />
        </div>
      </div>
      <section className="space-y-4"></section>
    </section>
  );
};
