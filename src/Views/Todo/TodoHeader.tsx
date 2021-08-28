import React from "react";

import { Box, TextField, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

import MyButton from "../../components/MyButton/MyButton";

type PropTypes = {
  addTodoHandler: React.FormEventHandler<HTMLFormElement>;
  errors: {
    msg: string;
  };
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setErrors: React.Dispatch<
    React.SetStateAction<{
      msg: string;
    }>
  >;
};

function TodoHeader(props: PropTypes) {
  const { addTodoHandler, errors, setText, text, setErrors } = props;
  return (
    <>
      <Typography variant="h5">To do list</Typography>
      <Box width="100%" display="flex" justifyContent="flex-end">
        <MyButton startIcon={<RefreshIcon />}>Reset all tasks</MyButton>
      </Box>
      <form onSubmit={addTodoHandler}>
        <TextField
          autoFocus={!!errors.msg}
          helperText={!!errors.msg ? errors.msg : null}
          error={!!errors.msg}
          name="todo"
          placeholder=" + Add a task"
          fullWidth
          onChange={(e) => {
            setErrors({ msg: "" });
            setText(e.target.value);
          }}
          value={text}
        />
      </form>
    </>
  );
}

export default TodoHeader;
