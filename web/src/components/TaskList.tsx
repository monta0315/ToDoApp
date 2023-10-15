import { ToDo } from "Types";
import Task from "components/Task";
import { useTask } from "hooks";

const TaskList = () => {
  const { tasks } = useTask();
  const reversedTasks = tasks.slice().reverse();

  return (
    <ul className=" ">
      {reversedTasks.map((task: ToDo) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
