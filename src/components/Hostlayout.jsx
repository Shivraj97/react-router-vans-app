import { NavLink, Outlet } from "react-router-dom";

const Hostlayout = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="flex gap-4 md:gap-8">
        <NavLink
          to="/host"
          end
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive
              ? "text-[#E17654] font-bold underline"
              : "hover:text-orange-400"
          }
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Hostlayout;
