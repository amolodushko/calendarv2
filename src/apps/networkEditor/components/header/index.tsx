import React from 'react';
import CommonHeader from '@common/components/header';
import useStyles from './useStyles';
import useSidebarStore from "@src/apps/store/sidebar";

const Header = () => {
  const classes = useStyles();
  const toggle = useSidebarStore(state => state.toggle);

  return (
    <div className={classes.root}>
      {' '}
      NE header + <CommonHeader />
      <button onClick={()=>toggle()}>Toggle sidebar</button>
    </div>
  );
};

export default Header;
