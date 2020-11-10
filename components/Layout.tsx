// CSS
import { ReactNode } from 'react';
import layoutStyles from '../styles/layout.module.css';

interface Props {
  cName?: string;
  children: React.ReactNode;
}

const Layout = ({ cName, children }: Props) => {
  return <div className={`fixed inset-0 ${cName}`}>{children}</div>;
};

export default Layout;
