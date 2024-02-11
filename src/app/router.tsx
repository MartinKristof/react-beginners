import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { PostsPage } from './posts/PostsPage';
import { SearchPage } from './search/SearchPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PostsPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: '*',
        element: <div>Page Not Found</div>,
      },
    ],
  },
]);
