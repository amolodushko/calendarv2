import Calendar from '@common/calendar';
import React from 'react';
import useStyles from './useStyles';
import useCalendarEvents from '@common/hooks/useCalendarEvents';
import useCalendarResources from '@common/hooks/useCalendarResources';
import renderEvent from './events';
import renderResource from './resources/index';

const Timeline = () => {
  const styles = useStyles();
  const events = useCalendarEvents();
  const resources = useCalendarResources();

  return (
    <div className={styles.wrapper}>
      <Calendar
        className={styles.calendarWrapper}
        resources={resources}
        events={events}
        eventContent={renderEvent}
        resourceLabelContent={renderResource}
        eventBackgroundColor={'transparent'}
      />
    </div>
  );
};

export default Timeline;
