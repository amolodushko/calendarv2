import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  shift: {
    background: 'var(--shift-background-color)',
    width: '100%',
    height: '100%',
    display: 'flex',
    border: '1.4px solid rgba(167, 211, 246, 0.9)',
    borderRadius: '18px',
  },
  selectedShift: {
    background: 'var(--shift-selected-background-color)',
    width: '100%',
    height: '100%',
    display: 'flex',
    borderRadius: '18px',
    border: '3px solid rgba(167, 211, 246, 0.9)'
  }
});

export default useStyles;
