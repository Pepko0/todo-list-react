import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { useTasks } from "../../useTasks"

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <main>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form
          addNewTask={addNewTask}
          tasks={tasks}
        />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </main>
  );
};
export default Tasks;
