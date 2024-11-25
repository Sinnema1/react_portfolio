import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  // Utility function to dynamically assign class names
  const getLinkClass = (path) => (currentPage === path ? 'nav-link active' : 'nav-link');

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={getLinkClass('/')} aria-current={currentPage === '/' ? 'page' : undefined}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Resume" className={getLinkClass('/Resume')} aria-current={currentPage === '/Resume' ? 'page' : undefined}>
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Portfolio" className={getLinkClass('/Portfolio')} aria-current={currentPage === '/Portfolio' ? 'page' : undefined}>
          My Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className={getLinkClass('/Contact')} aria-current={currentPage === '/Contact' ? 'page' : undefined}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;