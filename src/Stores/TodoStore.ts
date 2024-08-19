import { makeAutoObservable } from "mobx";
import { HARDCODED_TODO_INPUT, HARDCODED_TODO_LIST } from "../Constants";
import { Todo } from "../Types";

export class TodoStore {
    constructor() {
        makeAutoObservable(this);
    }

    todoList: Todo[] = HARDCODED_TODO_LIST;

    addTodo = () => {
        this.todoList.push(HARDCODED_TODO_INPUT);
    }
}

const todoStore = new TodoStore();
export default todoStore;