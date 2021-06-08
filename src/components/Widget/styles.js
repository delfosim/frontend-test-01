const styles = (theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    marginBottom: "20px",
  },
  header: {
    display: "flex",
    height: "30px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    backgroundColor: "white",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    color: "black",
  },
});

export default styles;
