import React from 'react';

const Driver = React.lazy(() => import('@common/components/driver'));

const renderResource = ({ resource }: any) => <Driver resource={resource} />;

export default renderResource;
