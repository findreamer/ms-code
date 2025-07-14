import { Link } from "react-router-dom";
import { FiUsers, FiSettings } from "react-icons/fi";
import { useAuthStore } from "../store/authStore";
import { useThemeStore } from "../store/themeStore";
import UserMenu from "./UserMenu";

const adminNavItems = [
  { path: "/admin", icon: <FiUsers size={20} />, label: "控制台" },
  { path: "/admin/users", icon: <FiUsers size={20} />, label: "用户管理" },
  {
    path: "/admin/settings",
    icon: <FiSettings size={20} />,
    label: "系统设置",
  },
];

export default function AdminSidebar() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  const { user } = useAuthStore();

  return (
    <aside
      className={`w-64 border-r ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } transition-colors duration-300`}
    >
      <div className="p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-purple-500">AdminPanel</span>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            } transition-colors`}
            aria-label={isDarkMode ? "切换到亮色模式" : "切换到暗色模式"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-1">
          {adminNavItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-colors ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } ${
                  window.location.pathname === item.path
                    ? "bg-purple-500 text-white"
                    : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
        <UserMenu user={user} />
      </div>
    </aside>
  );
}
