import React, { useState } from 'react';
import useStyles from './useStyles';

const Sidebar = () => {
  const styles = useStyles();
  const [visible, setVisible] = useState<boolean>(true);

  return visible ? (
    <div className={styles.sideBarWrapper}>
      <div className={styles.content}>
        <button onClick={() => setVisible(false)}>close</button>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
