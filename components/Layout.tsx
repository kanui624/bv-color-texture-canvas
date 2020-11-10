// CSS
import { ReactNode } from 'react';
import layoutStyles from '../styles/layout.module.css';

interface Props {
  children: React.ReactNode;
  cName?: string;
}

const Layout = ({ children, cName }: Props) => {
  return <div className={`fixed inset-0 ${cName}`}>{children}</div>;
};

export default Layout;
