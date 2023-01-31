import React, {useState} from "react";
import useStyles from "./useStyles";

const Map = () => {
    const styles = useStyles();
    const [visible, setVisible] = useState<boolean>(true);

    return visible ? <div className={styles.map} onClick={()=>setVisible(false) }> Here is a map! </div> : null;
}

export default Map;
