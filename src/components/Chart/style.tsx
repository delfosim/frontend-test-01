import { makeStyles, createStyles } from "@material-ui/core";

export const useStyle = makeStyles(() =>
  createStyles({
    card: {
      margin: "2rem 0",
      padding: "1rem 1.25rem",
    },
    cardContent: {
      position: "relative",
    },
    dropdownIcon: {
      position: "absolute",
      right: 0,
      top: "15px",
    },
    widgetTitle: {
      fontWeight: 600,
    },
  })
);
