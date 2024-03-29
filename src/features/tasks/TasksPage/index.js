import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import Form from "../Form";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import SampleTaskButton from "../SampleTaskButton";
import Section from "../../../common/Section";
import Search from "../Search";
import Container from "../../../common/Section/Container";

function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
      <Container>
        <h1>Lista zadań</h1>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          sampleTask={
            <SampleTaskButton
              onClick={() => dispatch(fetchExampleTasks())}
              disabled={loading}
              text={loading ? "Ładowanie..." : "Pobierz zadania"}
            />
          }
        />
        <Section title="Wyszukiwarka" body={<Search />} />
        <Section
          title="Lista zadań"
          body={<TaskList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
  );
}
export default TasksPage;
