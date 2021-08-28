import React, { useEffect, useState } from "react";

import { Container, Paper, Typography } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import { useTodoStyles } from "./styles";
import TodoHeader from "./TodoHeader";
import { TodoType } from "../../types/type";
import RenderTodos from "./RenderTodos";
import RenderTags from "../../components/RenderTags/RenderTags";

function Todo() {
  const classes = useTodoStyles();

  const [text, setText] = useState("");
  const [errors, setErrors] = useState<{ msg: string }>({ msg: "" });
  const [todos, setTodos] = useState<TodoType[] | null>([]);

  const [tags, setTags] = useState<string[]>([]);

  // get todos on first mount
  useEffect(() => {
    getTodosFromLocalStorage();
  }, []);

  // searching logic
  useEffect(() => {
    if (tags.length === 0) {
      getTodosFromLocalStorage();
      return;
    }
    let ft: TodoType[] = [];

    todos?.forEach((todo) => {
      tags.forEach((tag) => {
        if (todo.title.includes(tag)) {
          ft.push(todo);
        }
      });
    });

    setTodos(ft);
  }, [tags]);

  // get todos from local storage
  const getTodosFromLocalStorage = () => {
    const storedTodos: TodoType[] | null = JSON.parse(
      localStorage.getItem("todos")!
    );
    if (storedTodos !== null) {
      setTodos(storedTodos);
    } else {
      setTodos([]);
    }
  };

  // saving todos in the local storage
  const saveTodoToLocalStorage = (todo: TodoType) => {
    const storedTodos: TodoType[] | null = JSON.parse(
      localStorage.getItem("todos")!
    );

    let todos: TodoType[] = [];

    if (storedTodos === null) {
      todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      todos = [todo, ...storedTodos];
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  // Add todo
  const addTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = true;

    if (text === "" || text.length <= 3) {
      isValid = false;
      setErrors({ msg: "Please enter minimum 4 characters" });
    }

    if (!isValid) {
      return;
    }

    const todo: TodoType = {
      id: uuidv4(),
      title: text,
      completed: false,
    };

    // save to local storage
    saveTodoToLocalStorage(todo);

    // get todos from local storage
    getTodosFromLocalStorage();
    setText("");
  };

  // Todo delete handler
  const deleteTodo = (id: string) => {
    const storedTodos: TodoType[] | null = JSON.parse(
      localStorage.getItem("todos")!
    );

    let todos: TodoType[] | null = null;

    todos = storedTodos?.filter((todo) => todo.id !== id)!;
    localStorage.setItem("todos", JSON.stringify(todos));
    getTodosFromLocalStorage();
  };

  // Mark todo as completed handler
  const markTodoAsCompletedHandler = (id: string) => {
    const storedTodos: TodoType[] | null = JSON.parse(
      localStorage.getItem("todos")!
    );

    storedTodos?.forEach((todo, i) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    localStorage.setItem("todos", JSON.stringify(storedTodos));
    getTodosFromLocalStorage();
  };

  // remove tags from the header
  const removeTagHandler = (index?: number) => {
    const remainingTags = tags.filter((tag, i) => i !== index);
    setTags(remainingTags);
  };

  // Delete all the todos
  const deleteAllTodos = () => {
    localStorage.removeItem("todos");
    getTodosFromLocalStorage();
  };

  return (
    <section className={classes.section}>
      <Container>
        <Paper elevation={0}>
          <TodoHeader
            addTodoHandler={addTodoHandler}
            deleteAllTodos={deleteAllTodos}
            setErrors={setErrors}
            errors={errors}
            setText={setText}
            text={text}
          />

          {tags.length > 0 && (
            <RenderTags tags={tags} onTagClick={removeTagHandler} />
          )}
          {/* Uncompleted todos */}
          {todos!.filter((todo) => todo.completed !== true).length > 0 ? (
            <RenderTodos
              setTags={setTags}
              todos={todos!.filter((todo) => todo.completed !== true)}
              deleteTodo={deleteTodo}
              markTodoAsCompletedHandler={markTodoAsCompletedHandler}
            />
          ) : (
            <Typography variant="h6" color="secondary" align="center">
              You don't have a pending todos 😎
            </Typography>
          )}

          {/* Completed Todos */}
          {todos!.filter((todo) => todo.completed === true).length > 0 && (
            <>
              <Typography variant="h5" color="textSecondary">
                Completed
              </Typography>
              <RenderTodos
                setTags={setTags}
                todos={todos!.filter((todo) => todo.completed === true)}
                deleteTodo={deleteTodo}
                markTodoAsCompletedHandler={markTodoAsCompletedHandler}
              />
            </>
          )}
        </Paper>
      </Container>
    </section>
  );
}

export default Todo;
