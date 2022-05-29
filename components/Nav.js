import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      {/* <span>
        <svg width='30' height='30'>
          <path d='M0,8 30,8' stroke='#000' stroke-width='5' />
          <path d='M0,17 30,17' stroke='#000' stroke-width='5' />
          <path d='M0,26 30,26' stroke='#000' stroke-width='5' />
        </svg>
      </span> */}

      <ul>
        <li>
          <h3 className='textLogo'>LibraryCard</h3>
        </li>
      </ul>

      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/library'>My Cards</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
