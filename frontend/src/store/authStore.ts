import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,

      login: async (email: string, _password: string) => {
        set({ isLoading: true });

        // 模拟API请求
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // 模拟登录成功
        set({
          user: {
            id: "1",
            name: "John Doe",
            email,
            role: "user", // 默认普通用户角色
            avatar: "https://picsum.photos/id/1005/200",
          },
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },

      switchRole: () => {
        set((state) => {
          if (!state.user) return state;

          return {
            user: {
              ...state.user,
              role: state.user.role === "user" ? "admin" : "user",
            },
          };
        });
      },
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (_state) => {
        // state.isLoading = false;
      },
    }
  )
);
