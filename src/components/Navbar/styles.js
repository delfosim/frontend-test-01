import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: '30px',
    marginTop: '-3px',
    objectFit: 'contain',
    objectPosition: 'center',
  },
  searchForm: {
    width: '100%',
  },
  searchLabel: {
    transform: 'translate(15px, -5px) scale(0.75)!important',
  },
  search: {
    height: '40px',
    width: '100%',
    '&.Mui-focused .MuiSvgIcon-root': {
      fill: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
