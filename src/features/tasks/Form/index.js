import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Body, NewTask, Button } from "./styled";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

  const focusInput = () => {
    if (newTaskContent === "") {
      inputRef.current.focus();
    }
  };

  return (
    <Body onSubmit={onFormSubmit}>
      <NewTask
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput} className="form__button">
        Dodaj zadanie
      </Button>
    </Body>
  );
};
export default Form;
