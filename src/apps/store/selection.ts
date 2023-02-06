import { create } from 'zustand';
import useReferencesStore from '@src/apps/store/refsRegister';

type SelectionState = {
  selection: any;
  publicSelection: any;
  select: (id: string, single?: boolean) => number;
  selectShiftById: (id: string) => void;
  setPublicSelection: () => void;
  deselect: (id: string, silent?: boolean) => void;
  deselectAll: (silent?: boolean) => void;
};

const type = 'shift';

const useSelectionStore = create<SelectionState>((set, get) => ({
  selection: new Map(),
  publicSelection: new Map(),
  selectShiftById: (id, keepExisting = false) => {
    const getRef = useReferencesStore.getState().getRef;
    const target = getRef(id, type);
    return target ? get().select(id, !keepExisting) : null;
  },
  select: (id, single = true) => {
    const selection = get().selection;
    const getRef = useReferencesStore.getState().getRef;
    const refItem = getRef(id, type)?.itemRef;
    if (single && selection.size >= 1) {
      get().deselectAll();
    }
    selection.set(id, { id, refItem });
    refItem?.current.select({ size: selection.size });
    get().setPublicSelection();
    return selection.size;
  },
  setPublicSelection: () => {
    useSelectionStore.setState((prev) => ({
      publicSelection: new Map(prev.selection),
    }));
  },
  deselect: (id, silent = false) => {
    const selection = get().selection;
    if (selection.has(id)) {
      const getRef = useReferencesStore.getState().getRef;
      const refItem = getRef(id, type)?.itemRef?.current;
      refItem?.deselect({
        size: selection.size - 1,
        silent,
      });
      selection.delete(id);
    }
    get().setPublicSelection();
    return selection.size;
  },
  deselectAll: (silent = false) => {
    const deselect = get().deselect;
    get().selection.forEach(({ id }: any) => deselect(id, silent));
    return get().selection.size;
  },
}));

export default useSelectionStore;
