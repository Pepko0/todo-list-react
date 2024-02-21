import { List, Item, Content, Button,StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTaskByQuery,
} from "../tasksSlice";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(
    "searchQueryParamName"
  );

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button title="Ustaw jako ukończone" done onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>

          <Content done={task.done}>
            <StyledLink title="Wyświetl szczegóły zadania" to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>

          <Button title="Usuń zadanie" remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
