import Form from "./features/tasks/Form";
import TaskList from "./features/tasks/TaskList";
import Buttons from "./features/tasks/Buttons";
import Section from "./common/Section";

export default () => (
    <main>
    <h1>Lista zadań</h1>
    <Section title="Dodaj nowe zadanie" body={<Form />} />
    <Section
      title="Lista zadań"
      body={<TaskList />}
      extraHeaderContent={<Buttons />}
    />
  </main>
);
