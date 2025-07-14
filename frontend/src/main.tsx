import React from "react";
import ReactDOM from "react-dom/client";
import { useThemeStore } from "./store/themeStore";
import AppRouter from "./routes";
import "./index.css";

// 应用主题模式
// eslint-disable-next-line react-refresh/only-export-components
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useThemeStore();

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
