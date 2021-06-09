import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(() =>
  createStyles({
    container: {
      minHeight: "80vh",
    },
    title: {
      textTransform: "capitalize",
      marginTop: "2rem",
      fontWeight: "bolder",
    },
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      minHeight: "80vh",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
