const style = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "34em",
    fontSize: "12px",
    overflow: "auto",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  addColumnButton: {
    background: "#f5f5f5",
    color: "#999",
    textAlign: "center",
    font: "inherit",
    minWidth: "2em",
    height: "2em",
    maxHeight: "2em",
    borderBottom: "1px solid rgb(231, 231, 231)",
    borderRadius: "0",
  },
  addRowButton: {
    background: "#f5f5f5",
    color: "#999",
    textAlign: "center",
    font: "inherit",
    minWidth: "6em",
    minHeight: "1.9em",
    height: "1.9em",
    maxHeight: "1.9em",
    borderRight: "1px solid rgb(231, 231, 231)",
    borderRadius: "0",
    width: "6em",
  },
});

export default style;
