import { ChangeEvent, forwardRef } from 'react';
import classNames from 'classnames';

export const Input = forwardRef<
  HTMLInputElement,
  {
    id: string;
    name: string;
    placeholder: string;
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  }
>(({ id, name, placeholder, className = '', value, onChange, defaultValue }, ref) => (
  <input
    ref={ref}
    type="text"
    className={classNames(
      'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
      className,
    )}
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
));

Input.displayName = 'Input';
