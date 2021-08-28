import TodoCard from "../../components/TodoCard/TodoCard";
import { TodoType } from "../../types/type";

type PropTypes = {
  todos: TodoType[];
  deleteTodo: (id: string) => void;
  markTodoAsCompletedHandler: (id: string) => void;
};

function RenderTodos(props: PropTypes) {
  const { todos, deleteTodo, markTodoAsCompletedHandler } = props;

  return (
    <>
      {todos!.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          deleteTodo={() => deleteTodo(todo.id)}
          markTodoAsCompletedHandler={() => markTodoAsCompletedHandler(todo.id)}
        />
      ))}
    </>
  );
}

export default RenderTodos;
