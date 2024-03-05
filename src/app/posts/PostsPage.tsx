import { FormEvent, useRef, useState } from 'react';
import { FormGroup } from './components/FormGroup';
import { PostList } from './components/PostList';

const data = [
  {
    id: String(new Date()),
    name: 'John Doe the First of His Name',
    publishedAt: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Pellentesque arcu. Etiam dictum tincidunt diam. In rutrum. Morbi scelerisque luctus velit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam at arcu a est sollicitudin euismod. Duis condimentum augue id magna semper rutrum. Etiam quis quam. Integer malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export const PostPage = () => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const textareaTextRef = useRef<HTMLTextAreaElement>(null);
  const [posts, setPosts] = useState(data);
  const [errors, setErrors] = useState({
    name: { message: '' },
    text: { message: '' },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = inputTextRef?.current?.value;
    const text = textareaTextRef?.current?.value;

    if (!name || !text) {
      setErrors({
        name: { message: !name ? 'Name is required' : '' },
        text: { message: !text ? 'Text is required' : '' },
      });

      return;
    }

    setPosts(currentPosts => [...currentPosts, { id: String(new Date()), publishedAt: new Date(), text, name }]);

    inputTextRef.current.value = '';
    textareaTextRef.current.value = '';

    setErrors({
      name: { message: '' },
      text: { message: '' },
    });
  };

  return (
    <section className="py-3 container mx-auto px-4 flex flex-col space-y-4 text-left">
      <form onSubmit={handleSubmit}>
        <FormGroup label="Your name:" name="name" error={errors.name.message}>
          <input
            ref={inputTextRef}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            name="name"
            id="name"
            placeholder="Your name"
          />
        </FormGroup>
        <FormGroup label="Your post:" name="text" error={errors.text.message}>
          <textarea
            id="text"
            name="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Some post"
            rows={4}
            ref={textareaTextRef}
          ></textarea>
        </FormGroup>
        <div className="mt-2">
          <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Submit
          </button>
        </div>
      </form>
      <section className="space-y-4">
        <PostList posts={posts} />
      </section>
    </section>
  );
};
