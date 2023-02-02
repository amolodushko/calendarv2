import React from 'react';
import useStyles from './useStyles';
import useSelectionStore from '@src/apps/store/selection';
import useChangeSidebarStateHandler from '@common/hooks/useChangeSidebarStateHandler';
import useSidebarStore from '@src/apps/store/sidebar';

const Content = () => {
  const styles = useStyles();
  const closeSidebar = useChangeSidebarStateHandler();
  const status = useSidebarStore((state) => state.status);
  const publicSelection = useSelectionStore((state) => state.publicSelection);
  const [selected]: any = Array.from(publicSelection.values());

  return (
    <div className={styles.content}>
      <button onClick={() => closeSidebar()}>close</button>
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
