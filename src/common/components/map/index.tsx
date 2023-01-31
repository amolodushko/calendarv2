import React from 'react';
import useStyles from './useStyles';

const Map = () => {
  const styles = useStyles();

  return <div className={styles.map}>
      {' '}
      Here is a map!{' '}
    </div>;
};

export default Map;
