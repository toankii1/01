// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Project", path: "/project" },
  { name: "Team", path: "/team" },
  { name: "Analytics", path: "/analytics" },
  { name: "Messages", path: "/messages" },
  { name: "Integrations", path: "/integrations" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm">
      <div className="p-6 font-bold text-2xl text-pink-600">Logo</div>
      <nav className="flex flex-col gap-2 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-pink-500 text-white font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
