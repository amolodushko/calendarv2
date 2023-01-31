import React from 'react';
import useStyles from './useStyles';

const Stop = () => {
  const styles = useStyles();

  return (
    <div className={styles.stopWrapper}>
      <div className={styles.stop} />
    </div>
  );
};
export default Stop;
