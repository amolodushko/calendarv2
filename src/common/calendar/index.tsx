import React, { Ref } from 'react';
import './app.css';
import FullCalendar from '@fullcalendar/react';
import { CalendarOptions } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import useStyles from './useStyles';

export interface CalendarProps extends CalendarOptions {
  className?: string;
  calendarRef?: Ref<any>;
}

const slotFormat = {
  hour: '2-digit',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short',
} as CalendarProps['slotLabelFormat'];

const Calendar = ({
  className,
  height = '100%',
  timeZone = 'UTC',
  resourceAreaHeaderContent,
  resourceAreaWidth = 254,
  nowIndicator = true,
  slotLabelFormat = slotFormat,
  headerToolbar = null,
  slotMinWidth = 70,
  slotLabelClassNames = 'fc-slot-label-content',
  slotLaneClassNames = 'fc-slot-lane',
  slotMinTime = 0,
  calendarRef,
  eventContent,
  resourceLabelContent,
  ...rest
}: CalendarProps) => {
  const styles = useStyles();
  return (
    <div className={`${styles.root} ${className}`}>
      <FullCalendar
        eventContent={eventContent}
        resourceLabelContent={resourceLabelContent}
        ref={calendarRef}
        slotLabelClassNames={slotLabelClassNames}
        slotLaneClassNames={slotLaneClassNames}
        schedulerLicenseKey={'CC-Attribution-NonCommercial-NoDerivatives'}
        plugins={[resourceTimelinePlugin]}
        slotMinWidth={slotMinWidth}
        slotMinTime={slotMinTime}
        initialView={'resourceTimelineDay'}
        height={height}
        timeZone={timeZone}
        resourceAreaHeaderContent={resourceAreaHeaderContent}
        headerToolbar={headerToolbar}
        resourceAreaWidth={resourceAreaWidth}
        nowIndicator={nowIndicator}
        slotLabelFormat={slotLabelFormat}
        {...rest}
      />
    </div>
  );
};

export default React.memo(Calendar);
