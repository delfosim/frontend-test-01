import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: "inherit",
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    header: {
      background: "#222",
      minHeight: "70px",
    },
    input: {
      padding: "10px 10px 10px 30px",
      color: "#fff",
    },
    icon: {
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
    inputUnderline: {
      "&::before": {
        borderBottom: "1px solid #fff",
      },
      "&:hover&::before": {
        borderBottom: "2px solid #fff",
      },
    },
    link: {
      maxWidth: "125px",

      "& img": {
        maxWidth: "100%",
      },
    },
  }),
);
