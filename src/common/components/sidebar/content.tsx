import React from "react";
import useStyles from "./useStyles";
import useSidebarStore from "@src/apps/store/sidebar";
const Content = () => {
  const styles = useStyles();
  const toggle = useSidebarStore(state => state.toggle);

  return <div className={styles.content}>
    <button onClick={() => toggle('NEW')}>close</button>
  </div>
}

export default React.memo(Content)
