import { useState } from "react";
import "./style.css";


const Form = ({ addNewTask, tasks }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent) {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        };
        localStorage.setItem("Tasks", JSON.stringify(tasks));
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <input
                value={newTaskContent}
                className="form__newTask"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button"
            >
                Dodaj zadanie
            </button>
        </form>
    );
};
export default Form;