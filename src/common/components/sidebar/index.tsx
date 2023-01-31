import React from 'react';
import useStyles from './useStyles';
import useSidebarStore from '@src/apps/store/sidebar';
import Content from './content';

const Sidebar = () => {
  const styles = useStyles();
  const isOpen = useSidebarStore((state) => state.isOpen);

  return isOpen ? (
    <div className={styles.sideBarWrapper}>
      <Content />
    </div>
  ) : null;
};

export default Sidebar;
