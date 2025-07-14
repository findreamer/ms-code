import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { useThemeStore } from "../store/themeStore";

export default function AdminLayout() {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
