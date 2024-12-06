export function Header({ todos }) {
  // const { todos } = props;
  const todosLength = todos ? todos.length : 0; // This guarantees that we don't have an error where no todos exist
  const taskZero = todos.length === 0;
  const isTaskPlural = todos.length !== 1;
  const taskOrTasks = isTaskPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        {taskZero
          ? "You have no open tasks"
          : `You have ${todosLength} open
        ${taskOrTasks}.`}
      </h1>
    </header>
  );
}
