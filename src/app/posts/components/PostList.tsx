import { FC } from 'react';
import { TPost } from '../types';
import { PostItem } from './PostItem';

export const PostList: FC<{ posts: TPost[] }> = ({ posts }) =>
  posts.length > 0 ? (
    <ul>
      {posts.map(({ id, ...restProps }) => (
        <li key={id}>
          <PostItem {...restProps} />
        </li>
      ))}
    </ul>
  ) : null;
