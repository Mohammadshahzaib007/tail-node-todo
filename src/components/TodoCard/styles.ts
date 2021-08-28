import { TodoCardPropTypes } from "./TodoCard";
import { makeStyles } from "@material-ui/core";

const TEXT_COLOR = "#707070";

export const useTodoCardStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "1.5rem",
    cursor: "pointer",

    "& > .MuiCard-root": {
      width: "100% !important",
      boxSizing: "border-box",
      background: "#F9F6FF",
      borderRadius: "12px",
      color: TEXT_COLOR,
    },
  },

  circle: {
    minHeight: "1rem",
    minWidth: "1rem",
    borderRadius: "5rem",
    marginRight: ".8rem",
    border: (props: TodoCardPropTypes) =>
      props.completed ? "" : `1px solid ${TEXT_COLOR}`,
    background: (props: TodoCardPropTypes) =>
      props.completed ? theme.palette.secondary.main : "none",
  },
}));
