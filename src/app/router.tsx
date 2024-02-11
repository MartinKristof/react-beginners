import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { PostsPage } from './posts/PostsPage';

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
        path: '*',
        element: <div>Page Not Found</div>,
      },
    ],
  },
]);
