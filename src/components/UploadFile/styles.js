const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
    border: `1px dashed ${theme.palette.primary.main}`,
  },
  DropContainer: {
    display: "flex",
    width: "100%",
    height: "230px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "height 0.2s ease",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "30px",
    textAlign: "center",
    color: theme.palette.secondary.light,
  },
  errorMessage: {
    color: theme.palette.error.light,
  },
  successMessage: {
    color: theme.palette.primary.main,
  },
});

export default styles;
