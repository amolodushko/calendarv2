import useSelectionStore from "@src/apps/store/selection";
import useSidebarStore from "@src/apps/store/sidebar";
import {useCallback} from "react";

const useCloseSidebarHandler = () => {
  const deselectAll = useSelectionStore((state) => state.deselectAll);
  const toggle = useSidebarStore((state) => state.toggle);
  const status = useSidebarStore((state) => state.status);

  //TODO: status may change without clicking on close.
  // Need to deselect shifts if status is changing (need to get prev status and check it)

  const closeHandler = useCallback(() => {
    toggle('CLOSED');
    if (status === 'SHIFT_INFO') {
      deselectAll();
    }
  }, [status]);

  return { closeHandler, status };
}

export default useCloseSidebarHandler;
