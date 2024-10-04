import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState(() => {
        // load todos from local storage if exisiting
        const localTodos = localStorage.getItem("todos");
        return localTodos ? JSON.parse(localTodos) : [];
    });
    const [doneItems, setDoneItems] = useState(() => {
        // load done items from local storage if it is existing
        const localDoneItems = localStorage.getItem("doneItems");
        return localDoneItems ? JSON.parse(localDoneItems) : [];
    });

    useEffect(() => {
        // save todos to local storage whenever they change
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        // save todos to local storage whenever they change
        localStorage.setItem("doneItems", JSON.stringify(doneItems));
    }, [doneItems])


    const addTodo = (newTask) => {
        setTodos([...todos, { id: Date.now(), task: newTask, completed: false}]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const deleteDoneItem = (id) => {
        setDoneItems(doneItems.filter(todo => todo.id !== id));
    }

    const markAsDone = (id) => {
        const filteredTodos = todos.filter(todo => {
            if (todo.id === id) {
                setDoneItems([...doneItems, { ...todo, completed: true }]);
                return false;
            }
            return true;
        })

        setTodos(filteredTodos); 
    }

    const undo = (id) => {
        const filteredTodos = doneItems.filter(doneItem => {
            if (doneItem.id === id) {
                setTodos([...todos, { ...doneItem, completed: false}]);
                return false;
            }
            return true;
        })
        setDoneItems(filteredTodos);
    }

    console.log(todos);
    console.log(doneItems);
    return (
        <TodoContext.Provider value={{
            todos,
            doneItems,
            addTodo,
            deleteTodo,
            markAsDone,
            deleteDoneItem,
            undo
        }}>
            {children}
        </TodoContext.Provider>
    )
}