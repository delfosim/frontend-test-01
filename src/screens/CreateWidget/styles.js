import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  info: {
    position: 'fixed',
    bottom: '90px',
    right: '32px',
    height: '40px',
    width: '40px',
    zIndex: 100,
  },
}));

export default useStyles;