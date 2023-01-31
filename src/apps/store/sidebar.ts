import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type Statuses = 'OPEN' | 'CLOSED' | 'NEW';

type SidebarState = {
  status: Statuses;
  toggle: (status?: Statuses) => void;
  isOpen: boolean;
};

export const isOpen = (status: Statuses) => status !== 'CLOSED';

const useSidebarStore = create<SidebarState>()(
  devtools(
    persist(
      (set) => ({
        status: 'CLOSED',
        isOpen: false,
        toggle: (newState) => {
          if (!newState) {
            return set((state) => {
              const status = isOpen(state.status) ? 'CLOSED' : 'OPEN';

              return {
                status,
                isOpen: isOpen(status),
              };
            });
          }

          return set(() => ({ status: newState, isOpen: isOpen(newState) }));
        },
      }),
      {
        name: 'sidebar',
      }
    )
  )
);

export default useSidebarStore;
