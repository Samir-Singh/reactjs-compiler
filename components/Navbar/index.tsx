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

      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </label>
    </div>
  );
};

export default NavBar;
