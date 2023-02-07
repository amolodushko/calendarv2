import React, {useCallback} from 'react';
import useComponentActions from "@common/hooks/useComponentActions";

const Driver = ({resource}: any) => {
  const onHoverChange = useCallback(() => {
    console.log('driver hover', resource);
  }, []);
  //TODO: think about how to make register ref works clean, without useComponentActions,
  // if we don't need select and some other things
  useComponentActions({
    id: resource.id,
    type: 'driver',
    onHoverChange
  });

  return <div
    id={resource.id}>
    {resource.title}
  </div>
};

export default React.memo(Driver);
