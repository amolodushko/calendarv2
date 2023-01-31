import { useMemo } from 'react';
import useStopsEvents from '@common/hooks/useStopsEvents';
import useShiftEvents from '@common/hooks/useShiftEvents';

const useCalendarEvents = () => {
  const stops = useStopsEvents();
  const shifts = useShiftEvents();

  return useMemo(()=> {
    return {
      events: [...stops, ...shifts],
      color: 'transparent',
    };
  }, [stops, shifts]);
};

export default useCalendarEvents;
