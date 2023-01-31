import React from 'react';
import CommonHeader from '@common/components/header';
import useStyles from './useStyles';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {' '}
      NE header + <CommonHeader />
    </div>
  );
};

export default Header;
