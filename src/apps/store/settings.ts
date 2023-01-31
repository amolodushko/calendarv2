import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type SettingsState = {
  isMapView: boolean;
  toggle: () => void;
};

const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        isMapView: true,
        toggle: () => set((state) => ({ isMapView: !state.isMapView })),
      }),
      {
        name: 'settings',
      }
    )
  )
);

export default useSettingsStore;
