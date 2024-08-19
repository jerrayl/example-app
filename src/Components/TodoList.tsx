import { TodoStore } from "../Stores/TodoStore";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

type TodoItemProps = {
    store: TodoStore;
}

export const TodoList = observer(({ store }: TodoItemProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            {store.todoList.map((item, i) => <TodoItem key={`todo1-${i}`} item={item}></TodoItem>)}
        </div>
    )
});

