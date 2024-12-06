import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/ToDoInput";
import { TodoList } from "./components/ToDoList";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAdd(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleEdit(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDelete(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <br />
      <TodoInput handleAdd={handleAdd} />
      <TodoList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        selectedTab={selectedTab}
        todos={todos}
      />
    </>
  );
}

export default App;
