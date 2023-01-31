import Calendar from '@common/calendar';
import React, { useRef } from 'react';
import useStyles from './useStyles';
import useCalendarEvents from '@common/hooks/useCalendarEvents';
import useCalendarResources from '@common/hooks/useCalendarResources';

const Timeline = () => {
  const styles = useStyles();
  const calendarRef = useRef(null);
  const resources = useCalendarResources();
  const events = useCalendarEvents();

  return (
    <Calendar
      calendarRef={calendarRef}
      className={styles.calendarWrapper}
      resources={resources}
      events={events}
      eventBackgroundColor={'transparent'}
    />
  );
};

export default React.memo(Timeline);
