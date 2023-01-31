import React from 'react';
import useStyles from '@common/components/shift/useStyles';

const Shift = () => {
  console.log('shift');
  // const backgroundColor = Date.now() %2 === 0? 'yellow' : 'blue';
  const styles = useStyles();

  return <div className={styles.shift} />;
};

export default React.memo(Shift);
