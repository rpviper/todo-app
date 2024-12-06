export function TodoCard({ todo, handleEdit, handleDelete, todoIndex }) {
  // const todo = todos[todoIndex];
  // console.log(todo);

  return (
    <div className="card todo-item">
      <p>{todo.input} </p>
      {/* comes from App.jsx */}
      <div className="todo-buttons">
        <button onClick={() => handleEdit(todoIndex)} disabled={todo.complete}>
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDelete(todoIndex)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
