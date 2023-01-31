import Calendar from "@common/calendar";
import React from "react";
import useStyles from "./useStyles";
import useCalendarEvents from "@common/hooks/useCalendarEvents";
import useCalendarResources from "@common/hooks/useCalendarResources";
import renderEvent from "./events";
const Map = React.lazy(() => import("../map"));

const Timeline = () => {
    const styles = useStyles();
    const events = useCalendarEvents();
    const resources = useCalendarResources();

    return <div className={styles.wrapper}>
        <div className={styles.mapWrapper}>
            <Map/>
        </div>
        <Calendar
            className={styles.calendarWrapper}
            resources={resources}
            events={events}
            eventContent={renderEvent}
            eventBackgroundColor={'transparent'}
        />
    </div>
}

export default Timeline;
