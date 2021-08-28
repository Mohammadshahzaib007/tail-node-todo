import { Card, Typography, Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useTodoCardStyles } from "./styles";

export type TodoCardPropTypes = {
  title: string;
  completed: boolean;
  deleteTodo: () => void;
  markTodoAsCompletedHandler: () => void;
};

function TodoCard(props: TodoCardPropTypes) {
  const { title, deleteTodo, markTodoAsCompletedHandler } = props;

  const classes = useTodoCardStyles(props);

  return (
    <div className={classes.root} onClick={markTodoAsCompletedHandler}>
      <Card>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <span className={classes.circle}></span>
            <Typography>{title}</Typography>
          </Box>

          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo();
            }}
          >
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      </Card>
    </div>
  );
}

export default TodoCard;
