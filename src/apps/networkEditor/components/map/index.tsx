import React from 'react';
import useStyles from './useStyles';
import useSettingsStore from '@src/apps/store/settings';

const MapComponent = React.lazy(() => import('@common/components/map'));

const Map = () => {
  const styles = useStyles();
  const isMapView = useSettingsStore((store) => store.isMapView);
  const toggle = useSettingsStore((store) => store.toggle);

  return (
    <>
      <div className={styles.actionWrapper}>
        <button className={styles.toggleButton} onClick={toggle}>
          {isMapView? 'Hide Map': 'Show map'}
        </button>
      </div>
      {isMapView ? (
        <div className={styles.mapWrapper}>
          <MapComponent />
        </div>
      ) : null}
    </>
  );
};

export default React.memo(Map);
