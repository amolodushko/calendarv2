import React, { useRef, useState} from 'react';
import useStyles from '@common/components/shift/useStyles';
import useSelectionStore from '@src/apps/store/selection';
import useSidebarStore from '@src/apps/store/sidebar';

type Props = {
  id?: string;
};

const Shift = ({ id }: Props) => {
  const styles = useStyles();

  const selection = useSelectionStore((state) => state.selection);
  const select = useSelectionStore((state) => state.select);
  const deselect = useSelectionStore((state) => state.deselect);
  const toggle = useSidebarStore((state) => state.toggle);

  const [isSelected, setSelected] = useState(selection.has(id));

  //TODO: if this shift is selected and it will unmount and mount again during calendar update
  // deselect by ref might not work is this shifts
  const selectionRef = useRef({
    deselect: () => {
      setSelected(false);
      toggle('CLOSED');
    },
  });

  const onClick = () => {
    if (isSelected) {
      deselect(id);
    } else {
      select({ id, selectionRef });
      setSelected(true);
      toggle('OPEN');
    }
  };

  return (
    <div
      className={isSelected ? styles.selectedShift : styles.shift}
      onClick={onClick}
    />
  );
};

export default React.memo(Shift);
