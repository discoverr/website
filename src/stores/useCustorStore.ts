import create from "zustand";

import { combine } from "zustand/middleware";
export const useCursorStore = create(
  combine(
    {
      enabled: false,
      hover: false,
      clicked: false,
      visible: false,
    },
    (set, get) => ({
      onMouseEnter: () => get().enabled && set({ hover: true }),
      onMouseLeave: () => get().enabled && set({ hover: false }),
      onMouseDown: () => get().enabled && set({ clicked: true, hover: false }),
      onMouseUp: () => get().enabled && set({ clicked: false, hover: false }),
      hide: () => get().enabled && set({ visible: false }),
      show: () => get().enabled && set({ visible: true }),
      enable: () => set({ enabled: true }),
      disable: () => set({ enabled: false }),
    })
  )
);
