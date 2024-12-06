import { TodoCard } from "./TodoCard";

export function TodoList({ todos, selectedTab, handleEdit, handleDelete }) {
  // const tab = "All";
  const filterTodoList = (tab) => {
    if (tab === "All") return todos;
    else if (tab === "Completed") return todos.filter((val) => val.complete);
    else return todos.filter((val) => !val.complete);
  };

  const filteredTodos = filterTodoList(selectedTab);

  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            todoIndex={todoIndex}
            todo={todo}
          />
        );
      })}
    </>
  );
}
