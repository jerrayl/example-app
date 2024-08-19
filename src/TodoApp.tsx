import { observer } from 'mobx-react';
import './App.css'
import { Button } from './Components/Button';
import { Modal } from './Components/Modal';
import { TodoStore } from './Stores/TodoStore';
import { TodoList } from './Components/TodoList';

type TodoAppProps = {
    store: TodoStore;
}

export const TodoApp = observer(({ store }: TodoAppProps) => {
    return (
        <div>
            {store.todoForm && <Modal closeModal={store.hideTodoForm} submitForm={store.addTodo} form={store.todoForm} />}

            <TodoList store={store} />

            <div className='mt-4'>
                <Button onClick={store.showTodoForm} text='Add new todo'></Button>
            </div>
        </div>
    )
});


export default TodoApp;
