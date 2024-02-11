import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export const NavItem: FC<{ children: ReactNode; to: string }> = ({ children, to }) => (
  <li className="mr-6">
    <NavLink
      className={({ isActive }) => classNames('text-white font-bold hover:underline', { underline: isActive })}
      to={to}
    >
      {children}
    </NavLink>
  </li>
);
