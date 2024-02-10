import { FC, useState } from 'react';
import { TErrors, TPost } from './types';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

const data = [
  {
    id: 1,
    name: 'John Doe the First of His Name',
    publishedAt: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Pellentesque arcu. Etiam dictum tincidunt diam. In rutrum. Morbi scelerisque luctus velit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam at arcu a est sollicitudin euismod. Duis condimentum augue id magna semper rutrum. Etiam quis quam. Integer malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const PostsPage: FC = () => {
  const [posts, setPosts] = useState<TPost[]>(data);
  const [errors, setErrors] = useState<TErrors>({
    name: { message: '' },
    text: { message: '' },
  });

  const handleSubmit = (nameValue: string, textValue: string) => {
    const name = nameValue;
    const text = textValue;

    if (!name || !text) {
      setErrors({
        name: { message: !name ? 'Name is required' : '' },
        text: { message: !text ? 'Text is required' : '' },
      });

      return;
    }

    setPosts(currentPosts => [
      {
        id: currentPosts.length + 1,
        name,
        publishedAt: new Date(),
        text,
      },
      ...currentPosts,
    ]);

    setErrors({
      name: { message: '' },
      text: { message: '' },
    });
  };

  return (
    <section className="flex flex-col space-y-4 text-left">
      <PostForm onSubmit={handleSubmit} errors={errors} />
      <section className="space-y-4">
        <PostList posts={posts} />
      </section>
    </section>
  );
};
