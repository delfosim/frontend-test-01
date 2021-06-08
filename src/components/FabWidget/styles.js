import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fab: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: 100,
  },
}));

export default useStyles;
