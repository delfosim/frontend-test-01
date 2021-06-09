import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  select: {
    width: '100%',
  },
  title: {
    margin: 0,
    color: theme.palette.secondary.main,
  },
  subtitle: {
    color: theme.palette.secondary.main,
    margin: '8px 0',
  },
  serie: {
    position: 'relative',
    padding: '15px 50px 30px 30px',
    '& .MuiFormControl-root:first-child': {
      marginBottom: '8px',
    },
    '& .MuiButtonBase-root': {
      position: 'absolute',
      top: '5px',
      right: '5px',
    },
  },
  newSerie: {
    height: '100px',
    '& .MuiGrid-root': {
      height: '100%',
    },
  },
  categories: {
    padding: '10px 15px 20px',
  },
  seriesTitle: {
    margin: 0,
    color: theme.palette.secondary.main,
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

export default useStyles;
