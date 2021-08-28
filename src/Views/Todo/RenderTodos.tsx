import { TodoType } from "../../types/type";

import TodoCard from "../../components/TodoCard/TodoCard";
import Tag from "../../components/Tag/Tag";

type PropTypes = {
  todos: TodoType[];
  deleteTodo: (id: string) => void;
  markTodoAsCompletedHandler: (id: string) => void;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

function RenderTodos(props: PropTypes) {
  const { todos, deleteTodo, markTodoAsCompletedHandler, setTags } = props;

  const HASHTAG_FORMATTER = (string: string) => {
    return string
      .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
      .filter(Boolean)
      .map((v, i) => {
        if (v.includes("#")) {
          return (
            <Tag
              key={i}
              onTagClick={() => {
                setTags((prevState) => {
                  if (prevState.includes(v.trim()) === false) {
                    return [v.trim(), ...prevState];
                  }
                  return prevState;
                });
              }}
            >
              {v}
            </Tag>
          );
        } else {
          return <span key={i}>{v}</span>;
        }
      });
  };

  return (
    <>
      {todos!.map((todo) => (
        <TodoCard
          key={todo.id}
          title={HASHTAG_FORMATTER(todo.title)}
          completed={todo.completed}
          deleteTodo={() => deleteTodo(todo.id)}
          markTodoAsCompletedHandler={() => markTodoAsCompletedHandler(todo.id)}
        />
      ))}
    </>
  );
}

export default RenderTodos;
