import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  select: {
    width: '100%',
  },
  title: {
    margin: '0 0 25px',
    color: theme.palette.secondary.main,
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
    height: '100%',
    minHeight: '100px',
    '& .MuiGrid-root': {
      height: '100%',
    },
  },
  categories: {
    padding: '10px 15px 20px',
  },
  seriesContainer: {
    margin: 0,
    padding: '0!important',
    width: '100%',
  },
  preview: {
    margin: 0,
    width: '100%',
    padding: '0 16px!important',
  },
  previewContainer: {
    padding: '16px 0!important',
  },
  seriesTitle: {
    margin: 0,
    color: theme.palette.secondary.main,
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

export default useStyles;
