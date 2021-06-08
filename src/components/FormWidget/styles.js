import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  select: {
    width: '100%',
  },
  serie: {
    position: 'relative',
    padding: '15px 50px 30px',
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
    height: '100%',
    minHeight: '100px',
    '& .MuiGrid-root': {
      height: '100%',
    },
  },
  categories: {
    padding: '10px 15px 20px',
  },
  preview: {
    margin: '15px 0 0',
  },
  seriesContainer: {
    margin: 0,
    padding: '0!important',
    width: '100%',
  },
  seriesTitle: {
    margin: 0,
    color: theme.palette.secondary.main,
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

export default useStyles;
