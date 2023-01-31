import React from 'react';
import './app.css'
import Header from "../header";

import useStyles from "./useStyles";
import Timeline from "../timeline";
const Sidebar = React.lazy(() => import('@common/components/sidebar'));

const App = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Header/>
            <div className={styles.appWrapper}>
                <Timeline/>
                <Sidebar/>
            </div>

        </div>
    );
}

export default React.memo(App);
