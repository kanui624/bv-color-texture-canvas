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
  { id: 1, title: 'Feeling Palette One', link: '' },
  { id: 2, title: 'Feeling Palette Two', link: 'feelingtwo' },
  { id: 3, title: 'Feeling Palette Three', link: 'feelingthree' },
];

const NavLinks = () => {
  return (
    <div className="absolute list-none">
      {navLinks.map(({ id, title, link }: Palette) => (
        <li key={id} className="">
          <Link href={`/${link}`}>
            <a className={navStyles.hover}>{title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavLinks;
