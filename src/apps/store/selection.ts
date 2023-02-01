import { create } from 'zustand';

type SelectionState = {
  selection: any;
  publicSelection: any;
  select: (item: { id: string }, single?: boolean) => number;
  registerRef: (item: { id: string; itemRef: any }, single?: boolean) => void;
  setPublicSelection: () => void;
  deselect: (id: string) => void;
  deselectAll: () => void;
  refsRegister: any;
};

const useSelectionStore = create<SelectionState>((set, get) => ({
  selection: new Map(),
  publicSelection: new Map(),
  refsRegister: new Map(),
  //TODO: need to think about. maybe we don't need it at all
  registerRef: (item) => { get().refsRegister.set(item.id, item) },
  select: (item, single = true) => {
    const current = get().selection;
    const deselectAll = get().deselectAll;
    if (single && current.size >= 1) {
      deselectAll();
    }
    get().selection.set(item.id, item);
    get().setPublicSelection();
    return get().selection.size;
  },
  setPublicSelection: () => {
    useSelectionStore.setState((prev) => ({
      publicSelection: new Map(prev.selection),
    }));
  },
  deselect: (id) => {
    const selection = get().selection;
    const refsRegister = get().refsRegister;
    if (selection.has(id)) {
      const item = refsRegister.get(id)?.itemRef?.current;
      item?.deselect(selection.size - 1);
      selection.delete(id);
    }
    get().setPublicSelection();
  },
  deselectAll: () => {
    const deselect = get().deselect;
    get().selection.forEach(({ id }: any) => deselect(id));
  }
}));

export default useSelectionStore;
