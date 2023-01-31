
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    wrapper : {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        position: "relative"
    },
    calendarWrapper: {
        margin: '20px',
        boxShadow: "0 3px 5px 2px rgb(255 105 135 / 30%)",
        borderRadius: "15px"
    },
    mapWrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 5,
        display: "flex"
    }
});

export default useStyles;
