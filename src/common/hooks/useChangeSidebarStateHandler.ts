import useSelectionStore from '@src/apps/store/selection';
import useSidebarStore, { Statuses } from '@src/apps/store/sidebar';
import { useCallback } from 'react';

const useChangeSidebarStateHandler = () => {
  const deselectAll = useSelectionStore((state) => state.deselectAll);
  const toggle = useSidebarStore((state) => state.toggle);

  return useCallback((newStatus: Statuses = 'CLOSED') => {
    const status = useSidebarStore.getState().status;
    toggle(newStatus);
    if (status === 'SHIFT_INFO') {
      deselectAll(true);
    }
  }, []);
};

export default useChangeSidebarStateHandler;
