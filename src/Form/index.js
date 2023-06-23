import { useState, useRef } from "react";
import { Body, NewTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent) {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        };
    };

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <Body
            onSubmit={onFormSubmit}
        >
            <NewTask
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={focusInput}
                className="form__button"
            >
                Dodaj zadanie
            </Button>
        </Body>
    );
};
export default Form;