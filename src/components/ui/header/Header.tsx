import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return <h1 className="text-3xl font-medium">{children}</h1>;
};

export default Header;
