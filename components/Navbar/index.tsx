import "../../src/App.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../src/theme-context";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
    </div>
  );
};

export default NavBar;
