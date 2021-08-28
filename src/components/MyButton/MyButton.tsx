import { Button, ButtonProps, withStyles } from "@material-ui/core";

const StyledButton = withStyles((theme) => ({
  root: {
    background: "#E9F9F0",
    color: theme.palette.secondary.main,
    borderRadius: 100,
    padding: "5px 12px",

    "&:hover": {
      background: theme.palette.secondary.main,
      color: "#E9F9F0",
    },
  },
  label: {
    textTransform: "capitalize",
  },
}))(Button);

function MyButton(props: ButtonProps) {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default MyButton;
