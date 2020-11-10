// CSS
import layoutStyles from '../styles/layout.module.css';

const Layout = ({ children, cName }) => {
  return <div className={`fixed inset-0 ${cName}`}>{children}</div>;
};

export default Layout;
