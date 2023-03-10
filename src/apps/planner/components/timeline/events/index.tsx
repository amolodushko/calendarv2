import React from 'react';

const Stop = React.lazy(() => import('@common/components/stop'));
const Shift = React.lazy(() => import('@common/components/shift'));

const renderEvent = (event: any) => {
  const { type } = event?.event?.extendedProps;
  if (type === 'shift') {
    return <Shift />;
  }

  if (type === 'stop') {
    return <Stop />;
  }

  return null;
};

export default renderEvent;
