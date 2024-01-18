import { StateCreator } from "zustand";

export type AuthSlice = {
  token: string;
  email: string;
  onAuthSuccess: ({ token, email }: { token: string; email: string }) => void;
  onLogout: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  token: "",
  email: "",
  onAuthSuccess: (payload) => {
    set(() => ({ ...payload }));
  },
  onLogout: () => {
    set(() => ({
      email: "",
      token: "",
    }));
  },
});
