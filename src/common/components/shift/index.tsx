import React from 'react';
import useStyles from '@common/components/shift/useStyles';
import useShiftSelection from '@common/hooks/useShiftSelection';

type Props = {
  id?: string;
  resourceId?: string;
};

const Shift = ({ id, resourceId }: Props) => {
  const styles = useStyles();
  const { isSelected, selectHandler, mouseOverHandler } = useShiftSelection({
    id,
    resourceId,
  });

  return (
    <div
      className={isSelected ? styles.selectedShift : styles.shift}
      onClick={selectHandler}
      onMouseEnter={mouseOverHandler}
      onMouseLeave={mouseOverHandler}
    />
  );
};

export default React.memo(Shift);
