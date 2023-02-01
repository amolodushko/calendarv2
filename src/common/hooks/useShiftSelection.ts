import useSelectionStore from "@src/apps/store/selection";
import useSidebarStore from "@src/apps/store/sidebar";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

const useShiftSelection = (id: string) => {
  const selection = useSelectionStore((state) => state.selection);
  const registerRef = useSelectionStore((state) => state.registerRef);
  const select = useSelectionStore((state) => state.select);
  const deselect = useSelectionStore((state) => state.deselect);
  const toggle = useSidebarStore((state) => state.toggle);

  const [isSelected, setSelected] = useState(selection.has(id));
  const toggleSidebar = (selectionSize: number) => toggle(selectionSize === 1 ? 'OPEN': 'CLOSED');

  const itemRef = useRef({
    deselect: (size:number) => {
      setSelected(false);
      toggleSidebar(size);
    },
  });

  useEffect(() => registerRef({ id, itemRef }), []);

  const selectHandler = useCallback((e:React.MouseEvent) => {
    if (isSelected) {
      deselect(id);
    } else {
      setSelected(true);
      const size = select({ id }, !e.metaKey);
      toggleSidebar(size);
    }
  }, [isSelected]);

  return useMemo(()=> ({ isSelected, selectHandler }), [ isSelected, selectHandler ]);
};

export default useShiftSelection;
