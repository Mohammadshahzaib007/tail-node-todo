import { makeStyles } from "@material-ui/core";

export const useTodoStyles = makeStyles((theme) => ({
  section: {
    width: "100vw",
    height: "100vh",
    background: theme.palette.primary.main,

    "& > .MuiContainer-root": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    "& .MuiPaper-root": {
      width: "60%",
      maxHeight: "70%",
      padding: "20px 30px",
      overflow: "auto",
    },

    "& form, & .MuiTypography-colorTextSecondary": {
      marginBottom: "1.5rem",
    },

    "& input::placeholder": {
      color: theme.palette.primary.main,
      opacity: 1,
    },

    "& h6": {
      margin: "30px 0px",
    },
  },
}));
