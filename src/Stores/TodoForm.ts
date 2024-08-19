import { makeAutoObservable } from "mobx";
import { Todo } from "../Types";

export class TodoForm {
    constructor() {
        makeAutoObservable(this);
    }

    title: string = '';
    content: string = '';

    toModel = (): Todo => {
        return {
            title: this.title,
            content: this.content
        }
    }
}