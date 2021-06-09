import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "sticky",
      zIndex: 100,
      bottom: "25px",
      left: "92%",
    },
  })
);
