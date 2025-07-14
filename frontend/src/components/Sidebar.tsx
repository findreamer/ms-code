import { Link } from "react-router-dom";
import { FiHome, FiCode, FiMessageSquare } from "react-icons/fi";
import { useAuthStore } from "../store/authStore";
import { useThemeStore } from "../store/themeStore";
import UserMenu from "./UserMenu";

const navItems = [
  { path: "/main", icon: <FiHome size={20} />, label: "首页" },
  {
    path: "/main/code-generator",
    icon: <FiCode size={20} />,
    label: "代码生成",
  },
  {
    path: "/main/ai-chat",
    icon: <FiMessageSquare size={20} />,
    label: "AI交互",
  },
];

export default function Sidebar() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  const { user } = useAuthStore();
  // const navigate = useNavigate();

  return (
    <aside
      className={`w-64 border-r ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } transition-colors duration-300`}
    >
      <div className="p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-500">CodeGen</span>
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
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-colors ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } ${
                  window.location.pathname === item.path
                    ? "bg-blue-500 text-white"
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
