import Form from "./features/tasks/Form";
import TaskList from "./features/tasks/TaskList";
import Buttons from "./features/tasks/Buttons";
import SampleTaskButton from "./features/tasks/SampleTaskButton";
import Section from "./common/Section";

export default  () => (
    <main>
    <h1>Lista zadań</h1>
    <Section 
      title="Dodaj nowe zadanie" 
      body={<Form />}  
      sampleTask={<SampleTaskButton/>}
      />
      <Section
      title="Wyszukiwarka"
      >
      </Section>
    <Section
      title="Lista zadań"
      body={<TaskList />}
      extraHeaderContent={<Buttons />}
    />
  </main>
);
