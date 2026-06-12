import { useEffect } from "react";
import TaskForm from "../task-form";
import { getAlltask } from "../../state/app/actions";
import { useAppDispatch } from "../../hooks/hooks";
import TaskList from "../task-list";

const TaskApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAlltask());
  });

  return (
    <div className="md:w-xl md:mx-auto m-6">
      <p className="text-[40px] text-center">Task App</p>
      <p className="text-[20px] text-center text-gray-400">
        Organize your tasks and stay focused
      </p>

      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskApp;
