import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="header__nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/" className="nav__link">HOME</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/shop" className="nav__link">SHOP</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/lookbook" className="nav__link">LOOKBOOK</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/features" className="nav__link">FEATURES</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/pages" className="nav__link">PAGES</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/blog" className="nav__link">BLOG</Link>
        </li>
      </ul>
    </nav>
  );
}