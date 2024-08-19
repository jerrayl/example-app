import './App.css'
import { TodoList } from './Components/TodoList'
import todoStore from './Stores/TodoStore'

function App() {
    const store = todoStore;

    return (
        <div>
            <TodoList store={store} />

            <button className="mt-4" onClick={store.addTodo}>Add new todo</button>
        </div>
    )
}

export default App
