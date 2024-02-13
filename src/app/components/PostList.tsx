import { FC } from 'react';
import { TPost } from '../types/types';
import { PostItem } from './PostItem';

export const PostList: FC<{ posts: TPost[] }> = ({ posts }) =>
  posts.length > 0 ? (
    <section className="space-y-4">
      <ul>
        {posts.map(({ id, ...restProps }) => (
          <li key={id}>
            <PostItem {...restProps} />
          </li>
        ))}
      </ul>
    </section>
  ) : null;
