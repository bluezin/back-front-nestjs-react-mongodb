import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteTask, editTask } from "../../state/app/actions";
import { FaCheckCircle, FaList } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";

const TaskList = () => {
  const dispatch = useAppDispatch();
  const { tasks, loadingTasks } = useAppSelector((state) => state.app);

  return (
    <div className="w-full my-8">
      <p className="flex items-center gap-2 font-medium text-[19px]">
        <FaList />
        My tasks ({tasks.length})
      </p>

      {loadingTasks ? <p>Loading ...</p> : ""}

      {tasks.map((item) => (
        <div
          key={item._id}
          className={`flex border border-[#4E67B8] rounded-[10px] ${item.done ? "bg-[rgba(34, 197, 94, 0.15)]" : "bg-[#07175E]"} justify-between py-4 px-5 my-3`}
        >
          <div className="flex items-start gap-4">
            <button
              className="bg-transparent cursor-pointer"
              onClick={() => {
                dispatch(
                  editTask({ task: { done: !item.done }, id: item._id }),
                );
              }}
            >
              {item.done ? (
                <FaCheckCircle color="#3DDC84" className="mt-2" />
              ) : (
                <MdOutlineRadioButtonUnchecked className="mt-2" />
              )}
            </button>

            <div>
              <p className="text-[18px]">{item.title}</p>
              <p>{item.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="bg-transparent border border-[#FF4D6D] p-1 rounded-[5px] cursor-pointer"
              onClick={() => {
                if (
                  !window.confirm("Are you sure you want to delete this task?")
                )
                  return;

                dispatch(deleteTask({ id: item._id }));
              }}
            >
              <RiDeleteBinLine color="red" height={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
