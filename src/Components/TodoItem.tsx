import { Todo } from "../Types";

type TodoItemProps = {
    item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
    return (
        <div className="rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-lg">
            <div>
                <h2 className="font-bold text-xl">{item.title}</h2>
            </div>
            <p>
                {item.content}
            </p>
        </div>
    )
}

export default TodoItem;
