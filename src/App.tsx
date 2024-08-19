import './App.css'
import todoStore from './Stores/TodoStore'
import TodoApp from './TodoApp';

function App() {
    const store = todoStore;

    return (
        <TodoApp store={store}/>
    )
}

export default App
