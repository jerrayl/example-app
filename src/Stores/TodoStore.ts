import { makeAutoObservable } from "mobx";
import { Todo } from "../Types";
import { TodoForm } from "./TodoForm";

export class TodoStore {
    constructor() {
        makeAutoObservable(this);
    }

    todoForm: TodoForm | null = null;
    todoList: Todo[] = [];

    showTodoForm = () => {
        console.log("show");
        this.todoForm = new TodoForm();
    }

    hideTodoForm = () => {
        this.todoForm = null;
    }

    addTodo = () => {
        if (!this.todoForm){
            return;
        }
        this.todoList.push(this.todoForm!.toModel());
        this.todoForm = null;
    }
}

const todoStore = new TodoStore();
export default todoStore;