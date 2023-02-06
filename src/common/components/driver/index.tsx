import React from 'react';

const Driver = ({resource}: any) => <div id={resource.id}>{resource.title}</div>;

export default React.memo(Driver);
