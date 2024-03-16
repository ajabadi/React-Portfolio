import { NavLink } from "react-router-dom";
import '../../src/App.css'; 

export default function Nav() {
  const pages = ["Projects", "Resume", "Contact"];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Jose Abadi
        </NavLink>
        <ul className="nav-list">
          {pages.map((page) => (
            <li className="nav-item" key={page}>
              <NavLink to={`/${page.toLowerCase().replace(" ", "-")}`} className="nav-link">
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
