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

  //TODO: move all if to separated components and load the lazy
  return (
    <div className={styles.content}>
      <button onClick={() => closeSidebar()}>close</button>
      {status === 'SHIFT_INFO' ? (
        <div>
          {publicSelection.size} - shift selection size <br/>
          {selected?.id} - shift id
        </div>
      ) : null}
      {status === 'NEW' ? (
        `this is new sidebar`
      ) : null}
    </div>
  );
};

export default React.memo(Content);
