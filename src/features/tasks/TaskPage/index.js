import Section from "../../../common/Section";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {getTaskById} from "../tasksSlice";
import { useSelector } from "react-redux";


function TaskPage () {
    const {id} =useParams();
    const task = useSelector(state => getTaskById(state, id));

    
    return (
        <main>
                <Section
                    title={task.content}
                    body={<>asdasd</>}
                >
                </Section>  
        </main>
    );
}
export default TaskPage;