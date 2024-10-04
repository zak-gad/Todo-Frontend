import { useTodos } from "../store/todo-context";

export default function TodoList() {
    const { todos, deleteTodo, markAsDone } = useTodos();

    if (todos.length === 0) {
        return (
            <p className="text-gray-500 mt-3">No tasks added yet.</p>
        )
    }

    return (
        <div className="space-y-2">
            {todos.map(todo => (
                <div
                    key={todo.id}
                    className="flex items-center bg-white shadow-md p-3"
                >
                    <span className="flex-1">{todo.task}</span>
                    <button 
                        className="btn btn-sm btn-warning text-gray-100"
                        onClick={() => markAsDone(todo.id)}
                    >
                        Done
                    </button>
                    <button 
                        className="btn bg-amber-500 text-amber-100 btn-sm ml-2"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )

}