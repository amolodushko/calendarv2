import React from "react";
import useStyles from "./useStyles";
import useSidebarStore from "@src/apps/store/sidebar";
import useSelectionStore from "@src/apps/store/selection";

const Content = () => {
  const styles = useStyles();
  const toggle = useSidebarStore(state => state.toggle);
  const publicSelection = useSelectionStore(state => state.publicSelection);
  const [ selected ]:any =  Array.from(publicSelection.values());

  return <div className={styles.content}>
    <button onClick={() => toggle('NEW')}>close</button>
    {publicSelection.size}
    {selected?.id}
  </div>
}

export default React.memo(Content)
