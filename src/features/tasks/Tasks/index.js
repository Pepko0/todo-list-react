import Form from "../Form"
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import SampleTaskButton from "../SampleTaskButton";
import Section from "../../../common/Section";


const Tasks = () => (
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
export default Tasks;