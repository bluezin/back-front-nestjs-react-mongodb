import { CiSquareMore } from "react-icons/ci";
import { useAppDispatch } from "../../hooks/hooks";
import { createTask } from "../../state/app/actions";
import { Formik } from "formik";
import { IoMdAdd } from "react-icons/io";

const TaskForm = () => {
  const dispatch = useAppDispatch();

  return (
    <section
      style={{ backgroundColor: "#07175E", borderColor: "#4E67B8" }}
      className="flex border-2 justify-center border-s-2-red items-center flex-col my-9 mx-auto py-7 px-6 rounded-2xl"
    >
      <div className="flex justify-between w-full">
        <p className="text-[24px] flex items-center gap-3">
          <CiSquareMore />
          New task
        </p>
        <p></p>
      </div>

      <Formik
        onSubmit={(values) => {
          dispatch(createTask({ ...values }));
        }}
        validate={() => {}}
        initialValues={{ title: "", description: "", done: false }}
      >
        {({ values, handleSubmit, isValid, setValues }) => {
          return (
            <form className="w-full">
              <div className="flex flex-col gap-3 items-center min-[670px]:flex-row">
                <input
                  placeholder="Write a title"
                  className="border p-2 rounded-[10px] my-8 w-full min-[670px]:w-auto"
                  value={values.title}
                  style={{ borderColor: "#4E67B8" }}
                  onChange={(event) => {
                    setValues({ ...values, title: event.target.value });
                  }}
                />
                <input
                  placeholder="Write a description"
                  className="border p-2 rounded-[10px] w-full min-[670px]:w-80"
                  value={values.description}
                  style={{ borderColor: "#4E67B8" }}
                  onChange={(event) => {
                    setValues({ ...values, description: event.target.value });
                  }}
                />
              </div>

              <div className="flex justify-between items-center gap-5 mt-2.5">
                <div className="flex items-center gap-3 my-4">
                  <input
                    type="checkbox"
                    id="done"
                    className="py-5 block cursor-pointer"
                    onChange={(event) => {
                      setValues({ ...values, done: event.target.checked });
                    }}
                  />
                  <label htmlFor="done" className="text-[20px] cursor-pointer">
                    Done
                  </label>
                </div>

                <button
                  onClick={() => handleSubmit()}
                  disabled={!isValid}
                  type="button"
                  style={{ background: "#3D5AFE" }}
                  className={`text-[20px] flex items-center gap-2 rounded-[10px] p-1 min-[670px]:p-2 w-30 min-[630px]:w-40 justify-center cursor-pointer `}
                >
                  <IoMdAdd />
                  Save
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default TaskForm;
