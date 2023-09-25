import {Button} from "../Buttons/styled"
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";


const SampleTaskButton = () => { 

    const dispatch = useDispatch();

    return (
        <Button onClick={()  => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
    )
}

export default SampleTaskButton;