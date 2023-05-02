import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/projects" className="nav-link">
        Products
      </Link>
    </nav>
  );
};
export default Navbar;
