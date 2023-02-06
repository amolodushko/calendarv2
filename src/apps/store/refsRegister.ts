import { create } from 'zustand';
import { useLayoutEffect } from 'react';
import { ItemRef } from '@common/hooks/useComponentActions';

export type RefTypes = 'shift' | 'driver' | 'stop' | 'unknown';

type RefsState = {
  registerRef: (
    item: { id: string; itemRef: ItemRef },
    type?: RefTypes
  ) => void;
  getRef: (id: string, type?: RefTypes) => any;
  refsRegister: any;
};

const makeId = (id: string, type: RefTypes) => `${id}_${type}`;

const useReferencesStore = create<RefsState>((set, get) => ({
  refsRegister: new Map(),
  registerRef: (item, type = 'unknown') =>
    get().refsRegister.set(makeId(item.id, type), item),
  getRef: (id, type = 'unknown') => get().refsRegister.get(makeId(id, type)),
}));

export const useRegisterRef = (id: string, itemRef: ItemRef) => {
  const registerRef = useReferencesStore((state) => state.registerRef);

  useLayoutEffect(() => {
    registerRef({ id, itemRef }, itemRef.current.type);
  }, []);
};

export default useReferencesStore;
