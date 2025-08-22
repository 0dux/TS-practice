interface TodoParams {
  title: string;
  description: string;
  completed: boolean;
}

function Todo(todo: TodoParams) {
  return (
    <div>
      Title: {todo.title} <br />
      Description: {todo.description} <br />
      Completed: {todo.completed ? "Task Completed" : "Not done"} <br />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Todo
        title="Go to gym"
        description="workout for 1 hr"
        completed={false}
      />
    </div>
  );
};

export default App;
