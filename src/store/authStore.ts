import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
}

interface AuthStore {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string, phone?: string) => void;
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {
        name: "Rohit Sharma",
        email: "rohit.sharma@example.com",
        phone: "+91 98765 43210",
      },
      isAuthenticated: true,
      login: (email, name = "Customer", phone = "+91 98765 43210") => {
        set({
          user: { name, email, phone },
          isAuthenticated: true,
        });
      },
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (profile) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...profile } : null,
        })),
    }),
    {
      name: "alkalineseva-auth-v1",
    }
  )
);
