import { create } from 'zustand';
import { useLayoutEffect } from 'react';
import { ItemActionsRef } from '@common/hooks/useComponentActions';

export type RefTypes = 'shift' | 'driver' | 'stop' | 'unknown';

type StoredRefItem = {
  id: string;
  ref: ItemActionsRef
};

type RefsState = {
  registerItem: (
    item: StoredRefItem,
    type?: RefTypes
  ) => void;
  getRegisteredItem: (id: string, type?: RefTypes) => StoredRefItem;
  refsRegister: any;
};

const makeId = (id: string, type: RefTypes) => `${id}_${type}`;

const useReferencesStore = create<RefsState>((set, get) => ({
  refsRegister: new Map(),
  registerItem: (item, type = 'unknown') =>
    get().refsRegister.set(makeId(item.id, type), item),
  getRegisteredItem: (id, type = 'unknown') => get().refsRegister.get(makeId(id, type)),
}));

export const useRegisterRef = (id: string, ref: ItemActionsRef) => {
  const registerItem = useReferencesStore((state) => state.registerItem);

  useLayoutEffect(() => {
    registerItem({ id, ref }, ref.current.type);
  }, []);
};

export default useReferencesStore;
