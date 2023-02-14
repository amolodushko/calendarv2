import React, { useCallback, useRef, useState } from 'react';
import { RefTypes, useRegisterRef } from '@src/apps/store/refsRegister';
import useSelectionStore from '@src/apps/store/selection';
export type SelectActionCbProps = { size: number; silent?: boolean };

interface ActionItem {
  deselect?: (props?: SelectActionCbProps) => void;
  select?: (props?: SelectActionCbProps) => void;
  setMouseEnter?: () => void;
  setMouseLeave?: () => void;
  type: RefTypes;
}

export type ItemActionsRef = {
  current?: ActionItem;
};

interface OwnProps {
  onSelectionChange?: (
    isSelected: boolean,
    props?: SelectActionCbProps
  ) => void;
  onHoverChange?: (isOver: boolean) => void;
  type?: RefTypes;
  id: string;
}

const useComponentActions = ({
  onSelectionChange,
  onHoverChange,
  type = 'unknown',
  id,
}: OwnProps) => {
  const selectAction = useSelectionStore((state) => state.select);
  const deselectAction = useSelectionStore((state) => state.deselect);

  const [isSelected, setSelected] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const itemActionsRef = useRef<ActionItem>({
    type,
    deselect: (props: SelectActionCbProps) => {
      setSelected(false);
      onSelectionChange && onSelectionChange(false, props);
    },
    select: (props: SelectActionCbProps) => {
      setSelected(true);
      onSelectionChange && onSelectionChange(true, props);
    },
    setMouseEnter: () => {
      setHovered(true);
      onHoverChange(true);
    },
    setMouseLeave: () => {
      setHovered(false);
      onHoverChange(false);
    },
  });

  useRegisterRef(id, itemActionsRef);

  const selectHandler = useCallback((e: React.MouseEvent) => {
    setSelected((isSelected) => {
      isSelected ? deselectAction(id) : selectAction(id, !e.metaKey);
      return !isSelected;
    });
  }, []);

  const mouseOverHandler = useCallback(
    (e: React.MouseEvent) => {
      const { type } = e;
      if (type === 'mouseenter') {
        onHoverChange && onHoverChange(true);
        return;
      }
      if (type === 'mouseleave') {
        onHoverChange && onHoverChange(false);
        return;
      }
    },
    [isHovered]
  );

  return { itemActionsRef, isSelected, isHovered, selectHandler, mouseOverHandler };
};
export default useComponentActions;
