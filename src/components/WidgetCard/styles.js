import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
  },
  header: {
    padding: '10px 25px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: '24px',
    color: theme.palette.secondary.main,
  },
  chart: {
    width: '90%',
    margin: '25px 0',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
}));

export default useStyles;
