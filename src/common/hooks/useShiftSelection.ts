import { useCallback } from 'react';
import useSidebarStore from '@src/apps/store/sidebar';
import useComponentActions, {
  SelectActionCbProps,
} from '@common/hooks/useComponentActions';

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

  const onHoverChange = useCallback(() => {
    //TODO: use useReferencesStore to highlight driver as selected by resourceId
    console.log('resourceId', resourceId);
  }, []);

  return useComponentActions({
    id,
    type: 'shift',
    onSelectionChange,
    onHoverChange,
  });
};

export default useShiftSelection;
