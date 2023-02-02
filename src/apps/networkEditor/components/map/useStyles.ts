import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mapWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    'z-index': 'var(--map-z-index)',
    display: 'flex',
  },
  actionWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '20px',
    zIndex: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButton: {
    color: 'blue',
    padding: '10px',
    '&:hover': {
      color: 'yellow',
      cursor: 'pointer',
    },
  },
});

export default useStyles;
