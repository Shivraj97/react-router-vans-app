import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 md:px-20 py-8">
      <Link to="/" className="text-3xl font-bold">
        #Vanlife
      </Link>
      <nav className="flex gap-8">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
