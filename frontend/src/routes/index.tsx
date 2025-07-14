import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/main/Home";
import CodeGenerator from "../pages/main/CodeGenerator";
import AIChat from "../pages/main/AIChat";
import Dashboard from "../pages/admin/Dashboard";
import UserManagement from "../pages/admin/UserManagement";
import Settings from "../pages/admin/Settings";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: (
      <ProtectedRoute requireAuth>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "code-generator",
        element: <CodeGenerator />,
      },
      {
        path: "ai-chat",
        element: <AIChat />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requireAuth requireAdmin>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/",
    redirect: "/main",
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
