import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  notFound: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',

    '& img': {
      width: 'auto',
      height: 'auto',
      maxWidth: '70%',
      maxHeight: '70%',
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
