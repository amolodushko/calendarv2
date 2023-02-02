import React from 'react';
import useStyles from './useStyles';
import useSelectionStore from '@src/apps/store/selection';
import useCloseSidebarHandler from "@common/hooks/useCloseSidebarHandler";

const Content = () => {
  const styles = useStyles();
  const { closeHandler, status } = useCloseSidebarHandler();
  const publicSelection = useSelectionStore((state) => state.publicSelection);
  const [selected]: any = Array.from(publicSelection.values());

  return (
    <div className={styles.content}>
      <button onClick={closeHandler}>close</button>
      {status === 'SHIFT_INFO' ? (
        <div>
          {publicSelection.size}
          {selected?.id}
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Content);
