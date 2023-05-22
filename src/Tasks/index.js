import "./style.css";

const Tasks = (props) => (
    <ul className="task">
        { props.tasks.map(task => (
            <li
            key={task.id}
            className={`task__item ${task.done && props.hideDoneTasks ? "task__item--hidden" : ""}`}
            >
                <button className="form__buttonDone form__buttonDone--click"> 
                    {task.done ? "✔" : ""}
                </button>
                    
                    <span className={`form__text ${task.done ? " task__decoration " : ""}`}>
                        {task.content} 
                    </span>
                    
                    <button className="form__buttonRemove">
                        🗑
                    </button>
            </li>
))}

    </ul >
);

export default Tasks;