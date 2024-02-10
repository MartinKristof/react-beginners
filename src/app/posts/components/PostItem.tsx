import { FC } from 'react';
import { TPost } from '../types';

const truncate = (text: string, length = 20) => (text.length > length ? `${text.substring(0, length)}...` : text);

const formatDate = (date: Date) => date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();

export const PostItem: FC<Omit<TPost, 'id'>> = ({ name, publishedAt, text }) => {
  return (
    <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
      <div className="flex-none">
        <div className="flex-row">
          <div>
            <strong>{truncate(name)}</strong>
          </div>
          <div>
            <em>{formatDate(publishedAt)}</em>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-ellipsis overflow-hidden">{truncate(text, 200)}</p>
      </div>
    </div>
  );
};
