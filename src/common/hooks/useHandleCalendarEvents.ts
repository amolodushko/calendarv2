import { useEffect } from 'react';

const useHandleCalendarEvents = ({ calendarRef, data, type, tm=5000 }: any) => {
  useEffect(() => {
    if (!calendarRef?.current) {
      return;
    }
    const id = setTimeout(() => {
      const calendarApi = calendarRef?.current?.getApi();
      const events: {
        remove: () => {};
        extendedProps: { type: string };
      }[] = calendarApi.getEvents();
      events.forEach((event) => {
        if (event.extendedProps.type === type) {
          event.remove();
        }
      });

      data.forEach((item:any) => calendarApi.addEvent(item));
    }, tm);

    return ()=> clearTimeout(id);
  }, [data, calendarRef]);
};

export default useHandleCalendarEvents;
