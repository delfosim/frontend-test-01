import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    card: {
      minWidth: "465px",
      padding: "2.5rem",
      position: "relative",
      maxHeight: "70vh",
      overflowY: "auto",
    },
    title: {
      fontWeight: "bolder",
      fontSize: "1.5rem",
      color: theme.palette.grey[900],
    },
    space: {
      margin: "1.25rem 0",
    },
    spaceTop: {
      marginTop: "1.5rem",
    },
    spaceBottom: {
      marginBottom: "1.5rem",
    },
    spaceGap: {
      margin: "1rem 0",
      gap: "1rem 0",
    },
    inputWrapper: {
      margin: "1.25rem 0",
      gap: "1rem",
      display: "flex",
      alignItems: "flex-end",
    },
    deleteButton: {
      backgroundColor: theme.palette.error.main,
      color: "#fff",

      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },
    submitButton: {
      backgroundColor: theme.palette.success.main,
      color: "#fff",

      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      },
    },
  }),
);
