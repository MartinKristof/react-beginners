import { FC, ReactNode } from 'react';

export const FormGroup: FC<{ label: string; name: string; error?: string; children: ReactNode }> = ({
  label,
  name,
  children,
  error,
}) => (
  <div className="mt-2">
    <label htmlFor={name} className="block mb-2 text-sm font-medium">
      {label}
    </label>
    {children}
    {error && <div className="text-red-500">{error}</div>}
  </div>
);
