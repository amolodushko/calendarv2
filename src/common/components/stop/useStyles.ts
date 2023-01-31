import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  stopWrapper: {
    width: '30px',
    height: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  stop: {
    width: '24px',
    height: '24px',
    borderRadius: '100%',
    background: 'white',
    border: '2px solid darkblue',
  },
});

export default useStyles;
