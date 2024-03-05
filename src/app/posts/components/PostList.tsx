import { FC } from 'react';
import { TPost } from '../types';
import { PostItem } from './PostItem';

export const PostList: FC<{ posts: TPost[] }> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <PostItem key={post.id} {...post} />
    ))}
  </ul>
);
