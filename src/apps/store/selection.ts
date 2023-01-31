import { create } from 'zustand';

type SelectionState = {
  selection: any;
  select: (item: { id: string; selectionRef: any }, single?: boolean) => void;
  selectX: (item: { id: string; selectionRef: any }, single?: boolean) => void;
  deselect: (id: string) => void;
};

const useSelectionStore = create<SelectionState>((set, get) => ({
  selection: new Map(),
  select: (item, single = true) => {
    const current = get().selection;
    if (single && current.size >= 1) {
      current.forEach(({ selectionRef }: any) =>
        selectionRef?.current?.deselect()
      );
      current.clear();
    }
    get().selection.set(item.id, item);
  },
  selectX: (item) => {
    useSelectionStore.setState((prev) => ({
      selection: new Map(prev.selection).set(item.id, item),
    }));
  },
  deselect: (id) => {
    const current = get().selection.get(id)?.selectionRef?.current;
    current?.deselect();
    get().selection.delete(id);
  },
}));

export default useSelectionStore;
