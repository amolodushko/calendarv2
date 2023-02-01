import React from 'react';
import useStyles from '@common/components/shift/useStyles';
import useShiftSelection from '@common/hooks/useShiftSelection';

type Props = {
  id?: string;
};

const Shift = ({ id }: Props) => {
  const styles = useStyles();
  const { isSelected, selectHandler } = useShiftSelection(id);

  return (
    <div
      className={isSelected ? styles.selectedShift : styles.shift}
      onClick={selectHandler}
    />
  );
};

export default React.memo(Shift);
