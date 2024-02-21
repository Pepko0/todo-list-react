import Section from "../../../common/Section";
import Container from "../../../common/Section/Container";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Section
        title={task ? task.content : "Nie znaleziono zadania :("}
        body={
          <>
            <strong>Ukończono: </strong>
            {task.done ? "Tak" : "Nie"}
          </>
        }
      ></Section>
    </Container>
  );
}
export default TaskPage;
