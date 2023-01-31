import React, { Suspense } from 'react';
import './app.css';
import Header from '../header';

import useStyles from './useStyles';
import Timeline from '../timeline';

const Sidebar = React.lazy(() => import('@common/components/sidebar'));
const Map = React.lazy(() => import('../map'));

const App = () => {
  const styles = useStyles();

  return (
    <Suspense fallback={<>...</>}>
      <div className={styles.root}>
        <Header />
        <div className={styles.appWrapper}>
          <Map />
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
