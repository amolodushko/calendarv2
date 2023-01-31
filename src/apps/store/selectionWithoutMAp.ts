import { create } from 'zustand';
import {devtools, persist} from "zustand/middleware";

type SelectionState = {
  selection: any;
  select: (item: { id: string; selectionRef: any }, single?: boolean) => void;
  deselect: (id: string) => void;
};

const useSelectionStore = create<SelectionState>()(
  devtools(
    persist(
      (set) => ({
        selection: {},
        select: (item) =>
          set((state) => ({
            selection: { ...state.selection, [item.id]: item },
          })),
        deselect: (item) =>
          set(({ selection }) => {
            const { [item.id]: _, ...newSelection } = selection;
            return { selection: newSelection };
          }),
      }),
      {
        name: 'selection',
      }
    )
  )
);



export default useSelectionStore;
