import { FC, ReactNode } from 'react';

export const ErrorMessage: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="text-red-500">{children}</div>
);
