import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { AuthSlice, createAuthSlice } from "./auth";

export type IGlobalStore = AuthSlice;

export const STORAGE_KEY = "gaweku-storage";

export const useStore = create<
  IGlobalStore,
  [["zustand/persist", Pick<IGlobalStore, "email" | "token">]]
>(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        email: state.email,
        token: state.token,
      }),
    }
  )
);
