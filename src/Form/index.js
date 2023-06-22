import { useState } from "react";
import { Body, NewTask, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent) {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        };
    };

    return (
        <Body
            onSubmit={onFormSubmit}
        >
            <NewTask
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                className="form__button"
            >
                Dodaj zadanie
            </Button>
        </Body>
    );
};
export default Form;