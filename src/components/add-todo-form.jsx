import { useState } from "react"
import { useTodos } from "../store/todo-context";

export default function AddTodoForm() {
    const [task, setTask] = useState('');
    const { addTodo } = useTodos();
 
    const handleSubmit = (e) => {
        e.preventDefault();

        const nonEmptyTask = task.trim();
        if (nonEmptyTask) {
            addTodo(nonEmptyTask);
        }

        setTask('');
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex gap-2">
                <input 
                    type="text" 
                    className="input input-bordered w-full"
                    placeholder="Add new task"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                <button 
                    className="btn btn-primary text-amber-50"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}