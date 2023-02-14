import { useCallback } from 'react';
import useSidebarStore from '@src/apps/store/sidebar';
import useComponentActions, {
  SelectActionCbProps,
} from '@common/hooks/useComponentActions';
import useReferencesStore from "@src/apps/store/refsRegister";

const useShiftSelection = ({
  id,
  resourceId,
}: {
  id: string;
  resourceId: string;
}) => {
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  const onSelectionChange = useCallback(
    (isSelected: boolean, { size, silent = false }: SelectActionCbProps) =>
      !silent && toggleSidebar(size === 1 ? 'SHIFT_INFO' : 'CLOSED'),
    []
  );

  const onHoverChange = useCallback((isOver: boolean) => {
    const getRegisteredItem = useReferencesStore.getState().getRegisteredItem;
    const driverItem = getRegisteredItem(resourceId, 'driver');
    driverItem.ref.current[!isOver? 'setMouseLeave' : 'setMouseEnter']();
  }, []);

  return useComponentActions({
    id,
    type: 'shift',
    onSelectionChange,
    onHoverChange,
  });
};

export default useShiftSelection;
