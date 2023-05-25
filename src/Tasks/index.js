import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="task">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`task__item ${task.done && hideDone ? "task__item--hidden" : ""}`}
            >
                <button
                    className="task__button--done">
                    {task.done ? "✔" : ""}
                </button>

                <span
                    className={`${task.done ? " task__decoration " : ""}`}>
                    {task.content}
                </span>

                <button
                    onClick = {() => removeTask(task.id)}
                    className="task__button--remove">
                    🗑
                </button>
            </li>
        ))}

    </ul >
);

export default Tasks;