import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex gap-5 mb-5">
      <NavLink
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending-link" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transition-link" : "",
          ].join(" ")
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isPending, isTransitioning }) => {
          const isActive =
            location.pathname.startsWith("/user-list") ||
            location.pathname.startsWith("/user-info");

          return [
            isPending ? "pending-link" : "",
            isActive ? "active-link" : "",
            isTransitioning ? "transition-link" : "",
          ].join(" ");
        }}
        to="/user-list"
      >
        User List
      </NavLink>
    </header>
  );
};

export default Header;
