import { create } from 'zustand';

type SelectionState = {
  selection: any;
  publicSelection: any;
  select: (item: { id: string; itemRef: any }, single?: boolean) => number;
  selectShiftById: (id: string) => void;
  registerRef: (item: { id: string; itemRef: any }, single?: boolean) => void;
  setPublicSelection: () => void;
  deselect: (id: string, silent?: boolean) => void;
  deselectAll: (silent?: boolean) => void;
  refsRegister: any;
};

const useSelectionStore = create<SelectionState>((set, get) => ({
  selection: new Map(),
  publicSelection: new Map(),
  refsRegister: new Map(),
  registerRef: (item) => {
    get().refsRegister.set(item.id, item);
  },
  selectShiftById: (id, keepExisting = false) => {
    const refsRegister = get().refsRegister;
    if (refsRegister.has(id)) {
      const item = refsRegister.get(id);
      return get().select(item, !keepExisting);
    }
    return null;
  },
  select: (item, single = true) => {
    const current = get().selection;
    const deselectAll = get().deselectAll;
    if (single && current.size >= 1) {
      deselectAll();
    }
    get().selection.set(item.id, item);
    const size = get().selection.size;
    item?.itemRef.current.select({ size });
    get().setPublicSelection();
    return size;
  },
  setPublicSelection: () => {
    useSelectionStore.setState((prev) => ({
      publicSelection: new Map(prev.selection),
    }));
  },
  deselect: (id, silent = false) => {
    const selection = get().selection;
    const refsRegister = get().refsRegister;
    if (selection.has(id)) {
      const refItem = refsRegister.get(id)?.itemRef?.current;
      refItem?.deselect({
        size: selection.size - 1,
        silent
      });
      selection.delete(id);
    }
    get().setPublicSelection();
    return get().selection.size;
  },
  deselectAll: (silent = false) => {
    const deselect = get().deselect;
    get().selection.forEach(({ id }: any) => deselect(id, silent));
    return get().selection.size;
  },
}));

export default useSelectionStore;
