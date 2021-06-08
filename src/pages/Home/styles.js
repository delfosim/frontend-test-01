const styles = (theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1200px",
    flexDirection: "column",
    width: "100%",
    height: "95%",
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    padding: "20px",
    boxSizing: "border-box",
  },
  content: {
    display: "flex",
    overflow: "auto",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    paddingRight: "5px",
  },
  addWidget: {
    position: "absolute",
    bottom: 32,
    right: 22,
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: 72,
      right: 22,
    },
  },
  openChartModal: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
