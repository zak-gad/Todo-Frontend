import AddTodoForm from "./components/add-todo-form"
import TodoProvider from "./store/todo-context"
import TodoList from "./components/todo-list";
import DoneList from "./components/done-list";

export default function App() {
  return (
   <TodoProvider>
     <div className="flex flex-col min-h-full max-w-xl mx-auto p-10 gap-10">
        <h1 className="text-3xl font-bold underline text-center">Todo App</h1>
        <AddTodoForm />

        <div>
          <h2 className="text-2xl font-bold">Todo Task</h2>
          <TodoList />
        </div>

        <div>
          <h2 className="text-2xl font-bold">Done and Dusted!</h2>
          <DoneList />
        </div>
     </div>
   </TodoProvider>
  )
}