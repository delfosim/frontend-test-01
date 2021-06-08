const styles = (theme) => ({
  container: {
    display: "flex",
    alignSelf: "center",
    maxWidth: "1200px",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "90vh",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      overflowX: "auto",
      width: "95%",
      height: "95%",
      borderRadius: "4px",
    },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    gridGap: "10px",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: theme.palette.primary.light,
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      flexDirection: "column",
      height: "auto",
      padding: "10px 0",
    },
  },
  inputDataTypeButtonsGroup: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flex: 3,
    },
  },
  inputTypesIcons: {
    fontSize: "22px",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flex: 1,
      marginRight: "5px",
    },
  },
  content: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    width: "100%",
    gridGap: "20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  chartVisualization: {
    display: "flex",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      height: "fit-content",
      flexDirection: "column",
    },
  },
  chartTypeButtonsGroup: {
    [theme.breakpoints.down("sm")]: {
      overflowX: "auto",
      flexDirection: "row",
      orientation: "horizontal",
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  chartTypeButtons: {
    height: "fit-content",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderBottom: "none",
      borderTop: "none",
    },
  },
  chartTypesIcons: {
    fontSize: "40px",
  },
  inputData: {
    flex: 1,
    overflow: "hidden",
  },
  footer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    gridGap: "10px",
    boxSizing: "border-box",
    overflow: "overlay",
    margin: "0 10px 10px 0",
  },
  saveButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: "200px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
  cancelButton: {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
});

export default styles;
