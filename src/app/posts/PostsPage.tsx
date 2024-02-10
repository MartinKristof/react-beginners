import { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'John Doe',
    publishedAt: '2024-01-01',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.',
  },
];

export const PostsPage = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  return (
    <section className="flex flex-col space-y-4 text-left">
      <div>
        <div className="mt-2">
          <label htmlFor="author" className="block mb-2 text-sm font-medium">
            Your name:
          </label>
          <input
            id="author"
            name="author"
            value={name}
            onChange={event => setName(event.target.value)}
            className="border border-slate-500 px-8 py-2 block p-2.5 w-full text-sm"
            placeholder="Some post"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="post" className="block mb-2 text-sm font-medium">
            Your post:
          </label>
          <textarea
            id="post"
            name="post"
            value={text}
            onChange={event => setText(event.target.value)}
            className="border border-slate-500 px-8 py-2 block p-2.5 w-full text-sm"
            placeholder="Some post"
            rows={4}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Submit
        </button>
      </div>
      <section className="space-y-4">
        <ul>
          {data.map(post => (
            <li key={post.id}>
              <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
                <div className="flex-none">
                  <div className="flex-row">
                    <div>
                      <strong>{post.name}</strong>
                    </div>
                    <div>
                      <em>{post.publishedAt}</em>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-ellipsis overflow-hidden">{post.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
