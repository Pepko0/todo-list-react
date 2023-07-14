import { Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }

  return (
    <Content>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </Button>
    </Content>
  );
};
export default Buttons;
