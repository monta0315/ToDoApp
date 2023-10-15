import AddTaskForm from "components/AddTaskForm";
import TaskList from "components/TaskList";
import { useTask } from "hooks";
import { MdDarkMode, MdSunny } from "react-icons/md";

const App = () => {
  const {
    addTask,
    clearTasks,
    darkTheme,
    deleteTask,
    editTask,
    getRemainingTasks,
    tasks,
    toggleCompleted,
    toggleTheme,
  } = useTask();
  return (
    <div
      className={`hero ${
        darkTheme ? "bg-gray-900" : "bg-gray-100"
      } h-screen md:min-h-[700px]  w-full m-auto flex flex-col items-center mt-14 transition-all duration-500`}
    >
      <div
        className={`flex flex-col space-y-6 w-[600px] md:w-[100%] z-10 p-4 ${
          darkTheme ? "text-white" : "text-black"
        }`}
      >
        <div className=" w-full flex items-center justify-between">
          <h1 className=" uppercase text-4xl font-bold text-white tracking-widest mb-4 md:text-3xl">
            {/* Task Manager */}
            My Tasks
          </h1>

          {darkTheme ? (
            <MdSunny
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className={`bg-gray-300 cursor-pointer dark:bg-gray-700 p-2 rounded-lg  bottom-5 right-5 ${
                darkTheme ? "text-white" : "text-black"
              }`}
              size={32}
            />
          )}
        </div>
        <div className=" shadow-md">
          <AddTaskForm darkTheme={darkTheme} onAddTask={addTask} />
        </div>
        <div
          className={`scroll ${
            darkTheme ? "bg-gray-800" : "bg-white"
          } w-full h-[400px] md:h-[500px] px-2 overflow-y-scroll rounded-md shadow-lg relative transition-all duration-500`}
        >
          <div
            className={`w-full overflow-hidden mb- sticky top-0 ${
              darkTheme ? "bg-gray-800" : "bg-white"
            } flex items-center justify-between text-gray-500 border-b`}
          >
            <p className=" text-gray-500 px-2 py-3">
              {getRemainingTasks().length} tasks left{" "}
            </p>
            <button onClick={clearTasks}>Clear all tasks</button>
          </div>

          {tasks.length ? (
            <TaskList />
          ) : (
            <div className=" w-full h-[80%] flex items-center justify-center overflow-hidden">
              <p className=" text-gray-500 text-center z-10">Empty task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
