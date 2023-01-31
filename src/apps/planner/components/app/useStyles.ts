import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: 'column',
        flex: 1,
        overflow: "hidden",
    },
    appWrapper: {
        display: "flex",
        flexDirection: 'row',
        flex: 1,
        overflow: "hidden",
        // gap: "20px",
        // padding: "20px",
    }
});

export default useStyles;
