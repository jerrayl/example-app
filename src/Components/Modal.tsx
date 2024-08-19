import { observer } from "mobx-react";
import { Button } from "./Button";
import { TodoForm } from "../Stores/TodoForm";

export interface ModalProps {
    closeModal: () => void;
    submitForm: () => void;
    form: TodoForm;
}

export const Modal = observer(({ form, closeModal, submitForm }: ModalProps) => {
    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center min-h-full bg-stone-600 bg-opacity-60">
            <div className="rounded-lg bg-white shadow-xl min-w-[25%] px-6 py-6 text-center z-20 flex flex-col">
                <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-medium">
                        Add Todo
                    </h3>
                    <h3
                        className="text-xl font-sans cursor-pointer font-medium -mt-1"
                        onClick={closeModal}>
                        x
                    </h3>
                </div>
                <input className="rounded-lg shadow-lg p-2" type="text" value={form.title} onChange={e => form.title = e.target.value} placeholder="Title" />
                <input className="rounded-lg shadow-lg p-2 mt-2" type="text" value={form.content} onChange={e => form.content = e.target.value} placeholder="Content" />
                <div>
                    <div className="flex justify-center mt-4">
                        <Button text="Create Todo" onClick={submitForm} />
                    </div>
                </div>
            </div>
        </div>
    );
});