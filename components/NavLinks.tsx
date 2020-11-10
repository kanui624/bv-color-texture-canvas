// Next Components
import Link from 'next/link';

// CSS
import navStyles from '../styles/nav.module.css';

interface Palette {
  id: number;
  title: string;
  link: string;
}

const navLinks = [
  { id: 1, title: 'Palette One', link: '' },
  { id: 2, title: 'Palette Two', link: 'feelingtwo' },
  { id: 3, title: 'Palette Three', link: 'feelingthree' },
];

const NavLinks = () => {
  return (
    <div
      className="grid grid-cols-3 col-auto list-none z-50 max-w-full"
      style={{ backgroundColor: 'white' }}
    >
      {navLinks.map(({ id, title, link }: Palette) => (
        <li key={id} style={{ border: '2px solid black', textAlign: 'center' }}>
          <Link href={`/${link}`}>
            <a className={navStyles.hover}>{title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavLinks;
