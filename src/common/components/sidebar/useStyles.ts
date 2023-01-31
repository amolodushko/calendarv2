import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    sideBarWrapper: {
        display: "flex",
        flexDirection: 'column',
        flex: 1,
        maxWidth: "350px",
        minWidth: "350px",
        overflow: "hidden"
    },
    content: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border: "1px solid #ddd",
        flex: 1,
        borderRadius: "15px"
    }
});

export default useStyles;
