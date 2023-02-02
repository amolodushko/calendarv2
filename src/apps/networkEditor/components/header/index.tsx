import React from 'react';
import CommonHeader from '@common/components/header';
import useStyles from './useStyles';
import useSelectionStore from "@src/apps/store/selection";
import useChangeSidebarStateHandler from "@common/hooks/useChangeSidebarStateHandler";

const Header = () => {
  const classes = useStyles();
  const selectShiftById = useSelectionStore(state => state.selectShiftById);
  const closeHandler = useChangeSidebarStateHandler();

  return (
    <div className={classes.root}>
      {' '}
      NE header + <CommonHeader />
      <button onClick={()=>selectShiftById('1')}>select first shift</button>
      <button onClick={()=>closeHandler('CLOSED')}>Close sidebar</button>
      <button onClick={()=>closeHandler('NEW')}>Open new sidebar</button>
    </div>
  );
};

export default Header;
