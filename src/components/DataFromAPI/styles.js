const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
  },
  heading: {
    display: "Flex",
    gridGap: "10px",
    flexBasis: "33.33%",
    fontSize: "15px",
    color: theme.palette.primary.main,
  },
  secondaryHeading: {
    fontSize: "14px",
    marginLeft: "20%",
    color: theme.palette.secondary.light,
  },
  getButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: "30px",
    alignSelf: "flex-end",
    marginLeft: "10px",
  },
});

export default styles;
