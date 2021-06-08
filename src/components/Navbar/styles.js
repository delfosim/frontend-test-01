import { fade, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  appBar: {
    height: "50px",
    width: "100%",
    alignItems: "center",
    boxShadow: "none",
    justifyContent: "center",
    overflow: "hidden",
    background: theme.palette.navBar.background,
  },
  toolBar: {
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 10px 0 0",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "80px",
    width: "auto%",
  },
  search: {
    display: "flex",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.secondary.main}`,
    height: "45%",
    color: theme.palette.secondary.main,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "60%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "30%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
  },
}));

export default styles;
