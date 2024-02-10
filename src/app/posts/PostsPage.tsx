import { FC, FormEvent, useEffect, useRef, useState } from 'react';

const data = [
  {
    id: 1,
    name: 'John Doe the First of His Name',
    publishedAt: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis condimentum augue id magna semper rutrum. Pellentesque arcu. Etiam dictum tincidunt diam. In rutrum. Morbi scelerisque luctus velit. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Nullam at arcu a est sollicitudin euismod. Duis condimentum augue id magna semper rutrum. Etiam quis quam. Integer malesuada. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

type TPost = {
  id: number;
  name: string;
  publishedAt: Date;
  text: string;
};

const truncate = (text: string, length = 20) => (text.length > length ? `${text.substring(0, length)}...` : text);

const formatDate = (date: Date) => date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();

export const PostsPage: FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const textareaTextRef = useRef<HTMLTextAreaElement>(null);
  const [posts, setPosts] = useState<TPost[]>(data);
  const [errors, setErrors] = useState<{ name: { message: string }; text: { message: string } }>({
    name: { message: '' },
    text: { message: '' },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = inputNameRef.current?.value;
    const text = textareaTextRef.current?.value;

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

    inputNameRef.current.value = '';
    textareaTextRef.current.value = '';

    setErrors({
      name: { message: '' },
      text: { message: '' },
    });
  };

  return (
    <section className="flex flex-col space-y-4 text-left">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mt-2">
            <label htmlFor="author" className="block mb-2 text-sm font-medium">
              Your name:
            </label>
            <input
              id="author"
              name="author"
              ref={inputNameRef}
              className="border border-slate-500 px-8 py-2 block p-2.5 w-full text-sm"
              placeholder="Some post"
            />
            {errors.name.message && <div className="text-red-500">{errors.name.message}</div>}
          </div>
          <div className="mt-2">
            <label htmlFor="post" className="block mb-2 text-sm font-medium">
              Your post:
            </label>
            <textarea
              id="post"
              name="post"
              ref={textareaTextRef}
              className="border border-slate-500 px-8 py-2 block p-2.5 w-full text-sm"
              placeholder="Some post"
              rows={4}
            />
            {errors.text.message && <div className="text-red-500">{errors.text.message}</div>}
          </div>
        </div>
        <div className="mt-2">
          <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Submit
          </button>
        </div>
      </form>
      <section className="space-y-4">
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
                <div className="flex-none">
                  <div className="flex-row">
                    <div>
                      <strong>{truncate(post.name)}</strong>
                    </div>
                    <div>
                      <em>{formatDate(post.publishedAt)}</em>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-ellipsis overflow-hidden">{truncate(post.text, 200)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
