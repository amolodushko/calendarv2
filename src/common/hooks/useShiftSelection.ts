import useSelectionStore from '@src/apps/store/selection';
import useSidebarStore from '@src/apps/store/sidebar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useShiftSelection = (id: string) => {
  const selection = useSelectionStore((state) => state.selection);
  const registerRef = useSelectionStore((state) => state.registerRef);
  const select = useSelectionStore((state) => state.select);
  const deselect = useSelectionStore((state) => state.deselect);
  const toggle = useSidebarStore((state) => state.toggle);

  const [isSelected, setSelected] = useState(selection.has(id));
  const toggleSidebar = (selectionSize: number) =>
    toggle(selectionSize === 1 ? 'SHIFT_INFO' : 'CLOSED');

  const itemRef = useRef({
    deselect: ({size, silent = false}:{size: number, silent: boolean}) => {
      setSelected(false);
      !silent && toggleSidebar(size);
    },
    select: ({size, silent = false}:{size: number, silent: boolean}) => {
      setSelected(true);
      !silent && toggleSidebar(size);
    },
  });

  useEffect(() => registerRef({ id, itemRef }), []);

  const selectHandler = useCallback(
    (e: React.MouseEvent) =>
      isSelected ? deselect(id) : select({ id, itemRef }, !e.metaKey),
    [isSelected]
  );

  return useMemo(
    () => ({ isSelected, selectHandler }),
    [isSelected, selectHandler]
  );
};

export default useShiftSelection;
